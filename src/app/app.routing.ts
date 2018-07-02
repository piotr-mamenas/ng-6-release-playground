import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from  './not-found.component';
import { GuessComponent } from './trainer/components/guess/guess.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'guess', component: GuessComponent },
  { path: '*', component: NotFoundComponent }
]);
