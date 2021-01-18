import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FanStatusComponent } from './fan-status/fan-status.component';


const routes: Routes = [
  { path: '', redirectTo: '/fan', pathMatch: 'full' },
  { path: 'fan', component: FanStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
