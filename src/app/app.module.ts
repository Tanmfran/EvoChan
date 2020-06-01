import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoComponent } from './People/evo/evo.component';
import {appRoutingModule} from './app.routing';
import { JakeComponent } from './People/jake/jake.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmieComponent } from './People/amie/amie.component';
import { TannorComponent } from './People/tannor/tannor.component';
import { VanceComponent } from './People/vance/vance.component';
import { StephenComponent } from './People/stephen/stephen.component';
import { ValoranthomeComponent } from './Valorant/valoranthome/valoranthome.component';
import { ValorantheaderComponent } from './_layouts/valorantheader/valorantheader.component';
import { BaselayoutComponent } from './_layouts/baselayout/baselayout.component';
import { ValorantlayoutComponent } from './_layouts/valorantlayout/valorantlayout.component';
import { BaseheaderComponent } from './_layouts/baseheader/baseheader.component';

@NgModule({
  declarations: [
    AppComponent,
    EvoComponent,
    JakeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AmieComponent,
    TannorComponent,
    VanceComponent,
    StephenComponent,
    ValoranthomeComponent,
    ValorantheaderComponent,
    BaselayoutComponent,
    ValorantlayoutComponent,
    BaseheaderComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
