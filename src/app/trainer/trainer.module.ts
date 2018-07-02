// ANGULAR CORE LIBS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

// MODULE COMPONENTS
import { GuessComponent } from './components/guess/guess.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatInputModule,
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
