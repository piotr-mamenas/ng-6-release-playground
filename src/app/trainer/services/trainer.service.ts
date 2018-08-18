import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  getTranslations() {
    return this.http.get('/api/trainer/translations')
    .pipe(map(res => res.json()));
  }
}
