import { Routes, RouterModule } from '@angular/router';

import { EvoComponent } from './evo/evo.component';
import {JakeComponent} from './jake/jake.component';

const routes: Routes = [
  { path: 'evo', component: EvoComponent },
  { path: 'jake', component:  JakeComponent},
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
