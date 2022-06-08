import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Design1Component } from './design1/design1.component';
import { Design2Component } from './design2/design2.component';
import { Design3Component } from './design3/design3.component';
import { Design4Component } from './design4/design4.component';

const routes: Routes = [
  { path: '1', component: Design1Component },
  { path: '2', component: Design2Component },
  { path: '3', component: Design3Component },
  { path: '4', component: Design4Component },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
