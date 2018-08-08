import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { currentTranslationData } from './../../../dummy-data/translation-data';
import { TranslationRow } from './../../../interfaces/translations-row';

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
  currentTranslationData : TranslationRow[];

  guessForm = new FormGroup({
    guessedPhrase: new FormControl('', Validators.required)
  });

  fetchNextRow(){
    if (this.currentItem > currentTranslationData.length){
      // fetch new data
      this.currentItem = 0;
    }
    return currentTranslationData[this.currentItem];
  }

  ngOnInit(){
    this.isCommitted = false;
    this.isCorrect = false;
    this.currentItem = 0;
    this.currentTranslationData = currentTranslationData;
  }

  commitGuess() {
    if(this.isCommitted){
      if(this.isCorrect){
        // service - add success count to all with that Word
      } else {
        // service - record mistake and reload new dataset if needed
      }
    }

    if (this.guessForm.valid){
      this.isCommitted = true;
      if(this.guessForm.value.guessedPhrase == this.actualTranslation){
        this.isCorrect = true;
      } else {
        // service - check if any other translations as provided
        // if yes set correct true
        // if no set correct false
        this.isCorrect = false;
      }

    }
  }

  overrideGuess() {

  }
}
