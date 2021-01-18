import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanStatusComponent } from './fan-status/fan-status.component';

const routes: Routes = [
  { path: 'fan', component: FanStatusComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanControlRoutingModule { }
