import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from  './not-found.component';
import { TrainerComponent } from './trainer/trainer.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'train', component: TrainerComponent },
  { path: '*', component: NotFoundComponent }
]);
