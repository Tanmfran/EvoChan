import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoComponent } from './evo/evo.component';
import {appRoutingModule} from './app.routing';
import { JakeComponent } from './jake/jake.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    EvoComponent,
    JakeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
