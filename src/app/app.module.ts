import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoComponent } from './evo/evo.component';
import {appRoutingModule} from './app.routing';
import { JakeComponent } from './jake/jake.component';

@NgModule({
  declarations: [
    AppComponent,
    EvoComponent,
    JakeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
