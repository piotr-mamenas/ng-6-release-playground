// ANGULAR CORE LIBS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

// MODULE COMPONENTS
import { GuessComponent } from './components/guess/guess.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    GuessComponent
  ],
  exports: [
  ]
})

export class TrainerModule {
}
