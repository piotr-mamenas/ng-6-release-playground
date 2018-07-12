import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainerService {

  constructor(private http:  Http) {}

  recordMistake(translationId : number) {
    // api call
  }

  recordSuccess(translationId : number) {
    // api call
  }

  getAlternativeTranslation(translationId : number) {
    // api call
  }
}
