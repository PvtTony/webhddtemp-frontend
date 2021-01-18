import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FanControlModule } from './fan-control/fan-control.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


// import { FanStatusComponent } from './fan-control/fan-status/fan-status.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// import { SetFanStatusDialogComponent } from './fan-control/set-fan-status-dialog/set-fan-status-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FanControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
