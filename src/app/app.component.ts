import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  word: string = "Lorem";

  ngOnInit() { }

  getWord(word: string) {
    this.word = word;
  }
}
