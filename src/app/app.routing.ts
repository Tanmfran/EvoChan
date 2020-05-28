import { Routes, RouterModule } from '@angular/router';

import { EvoComponent } from './evo/evo.component';

const routes: Routes = [
  { path: 'evo', component: EvoComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
