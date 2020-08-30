import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import  { ReactiveFormsModule } from '@angular/forms'
import { MDBSpinningPreloader,MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers:[MDBSpinningPreloader]
})
export class HomepageModule { }
