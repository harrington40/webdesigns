import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenberRoutingModule } from './menber-routing.module';
import { MenberComponent } from './menber.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableModule } from 'ngx-easy-table';

@NgModule({
  declarations: [MenberComponent],
  imports: [
    CommonModule,
    MenberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule
  ]
})
export class MenberModule { }
