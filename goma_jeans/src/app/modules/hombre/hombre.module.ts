import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HombreRoutingModule } from './hombre-routing.module';
import { HombreComponent } from './pages/hombre/hombre.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HombreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HombreRoutingModule
  ]
})
export class HombreModule { }
