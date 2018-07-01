// ANGULAR CORE LIBS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  declarations: [
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})

export class SharedModule {
}
