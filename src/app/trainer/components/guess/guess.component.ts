import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'trainer-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent {
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
