import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveListComponent } from './drive-list/drive-list.component';

const routes: Routes = [
  { path: 'drives', component: DriveListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempMonitorRoutingModule { }
