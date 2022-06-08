import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Design1Component } from './design1/design1.component';
import { Design2Component } from './design2/design2.component';
import { Design3Component } from './design3/design3.component';
import { Design4Component } from './design4/design4.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    Design1Component,
    Design2Component,
    Design3Component,
    Design4Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
