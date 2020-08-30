import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenberComponent } from './menber.component';

const routes: Routes = [{ path: '', component: MenberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenberRoutingModule { }
