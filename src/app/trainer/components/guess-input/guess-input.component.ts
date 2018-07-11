import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';


import { currentTranslationRow } from './../../../dummy-data/translation-data';

@Component({
  selector: 'trainer-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent implements OnInit {
  isCommitted : boolean;
  isCorrect : boolean;
  currentItem : number;

  guessedWord : string = 'Hola';
  actualTranslation : string = 'Hello';

  guessForm = new FormGroup({
    guessedPhrase: new FormControl('', Validators.required)
  });

  ngOnInit(){
    this.isCommitted = false;
    this.isCorrect = false;
    this.currentItem = 0;
  }

  commitGuess() {
    if(this.isCommitted){

    }
    if (this.guessForm.valid){
      this.isCommitted = true;
      if(this.guessForm.value.guessedPhrase == this.actualTranslation){
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }

    }
  }

  overrideGuess() {

  }
}
