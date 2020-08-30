import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'ngx-easy-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { ReactiveFormsModule } from '@angular/forms'
import { MDBSpinningPreloader, MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,TableModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers:[MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
