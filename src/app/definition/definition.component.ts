import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import configJson from '../../../.env.json'
import { Prs } from 'src/utils/definition';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  @Input() word:string;
  definition: any;
  getValues = (obj: any) => Object.values<any>(obj);

  private apiKey: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.apiKey = configJson.API_KEY;
    console.log(this.apiKey);
  }

  ngOnChanges() {
    this.getDefinition();
  }

  getDefinition() {
    return this.http.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.word}?key=${this.apiKey}`)
      .pipe(
        retry(3),
        catchError(error => {
          console.error(error);
          return of({error: true});
        })
      )
      .subscribe(def => { this.definition = { ...def }; });
  }

  getAudio(pronunciation: Prs): HTMLAudioElement | null {
    const audio = pronunciation?.sound?.audio;
    if (!audio) { return null; }
    const subDir = audio.slice(0, 3) === 'bix' ? 'bix' :
                   audio.slice(0, 2) === 'gg' ? 'gg' :
                   audio.slice(0, 1).match(/[a-zA-Z]/g) ? audio.slice(0, 1) : 'number';
    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subDir}/${audio}.mp3`
    return new Audio(audioUrl);
  }
}
