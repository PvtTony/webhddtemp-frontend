import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TempMonitorRoutingModule } from './temp-monitor-routing.module';

import { MonitoringService } from './monitoring.service';
import { DriveListComponent } from './drive-list/drive-list.component';
import { DriveTempDetailComponent } from './drive-temp-detail/drive-temp-detail.component';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [DriveListComponent, DriveTempDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    TempMonitorRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    MonitoringService
  ]
})
export class TempMonitorModule { }
