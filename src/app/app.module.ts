import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { FanControlModule } from './fan-control/fan-control.module';
import { TempMonitorModule } from './temp-monitor/temp-monitor.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FanControlModule,
    TempMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
