import { Routes, RouterModule } from '@angular/router';

import { EvoComponent } from './People/evo/evo.component';
import {JakeComponent} from './People/jake/jake.component';
import {HomeComponent} from './home/home.component';
import {StephenComponent} from './People/stephen/stephen.component';
import {AmieComponent} from './People/amie/amie.component';
import {TannorComponent} from './People/tannor/tannor.component';
import {VanceComponent} from './People/vance/vance.component';
import {ValoranthomeComponent} from './Valorant/valoranthome/valoranthome.component';
import {BaselayoutComponent} from './_layouts/baselayout/baselayout.component';
import {ValorantlayoutComponent} from './_layouts/valorantlayout/valorantlayout.component';

const routes: Routes = [
  {
    path: '',
    component: BaselayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'evo', component: EvoComponent },
      { path: 'jake', component:  JakeComponent},
      { path: 'stephen', component:  StephenComponent},
      { path: 'amie', component:  AmieComponent},
      { path: 'tannor', component:  TannorComponent},
      { path: 'vance', component:  VanceComponent},
    ]
  },
  {
    path: '',
    component: ValorantlayoutComponent,
    children: [
      { path: 'valorant', component: ValoranthomeComponent}
    ]
  },
  ];

export const appRoutingModule = RouterModule.forRoot(routes);
