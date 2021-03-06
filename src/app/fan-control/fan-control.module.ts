import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { server_url } from '../shared/config';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { FanControlRoutingModule } from './fan-control-routing.module';

import { FanStatusComponent } from './fan-status/fan-status.component';
import { SetFanStatusDialogComponent } from './set-fan-status-dialog/set-fan-status-dialog.component';

import { ControllerService } from './controller.service';

const config: SocketIoConfig = { url: server_url, options: {} }

@NgModule({
  declarations: [
    FanStatusComponent,
    SetFanStatusDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    SocketIoModule.forRoot(config),
    FanControlRoutingModule
  ],
  providers: [ControllerService]
})
export class FanControlModule { }
