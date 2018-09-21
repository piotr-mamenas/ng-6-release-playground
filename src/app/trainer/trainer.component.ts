import { Component, OnInit } from '@angular/core';

import { TrainerService } from './services/trainer.service';
import { TranslationRow } from './../interfaces/translations-row';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})

export class TrainerComponent implements OnInit {
  translations : TranslationRow[];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }
}
