import { Routes, RouterModule } from '@angular/router';

import { EvoComponent } from './People/evo/evo.component';
import {JakeComponent} from './People/jake/jake.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'evo', component: EvoComponent },
  { path: 'jake', component:  JakeComponent},
  { path: '', component: HomeComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
