// ANGULAR CORE LIBS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';

// MODULE COMPONENTS
import { GuessInputComponent } from './components/guess-input/guess-input.component';
import { AnswerDisplayComponent } from './components/answer-display/answer-display.component';
import { TrainerComponent } from './trainer.component';

// MODULE SERVICES
import { TrainerService } from './services/trainer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  declarations: [
    GuessInputComponent,
    AnswerDisplayComponent,
    TrainerComponent
  ],
  providers: [
    TrainerService
  ],
  exports: [
  ]
})

export class TrainerModule {
}
