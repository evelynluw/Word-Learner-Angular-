import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() wordSubmit: EventEmitter<string> = new EventEmitter();

  word = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
    // this.word.valueChanges.subscribe(resp => { this.submitWord() });
  }

  submitWord() {
    if (this.word.value) {
      console.log(this.word.value);
      this.wordSubmit.emit(this.word.value);
    }
  }

}
