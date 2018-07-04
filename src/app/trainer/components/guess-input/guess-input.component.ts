import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'trainer-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent {
  isCommitted : boolean = false;

  guessForm = new FormGroup({
    guessedPhrase: new FormControl('', Validators.required)
  });

  commitGuess() {
    console.log(this.guessForm.value);
  }

  overrideGuess() {

  }
}
