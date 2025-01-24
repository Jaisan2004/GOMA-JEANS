import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HombreRoutingModule } from './hombre-routing.module';
import { HombreComponent } from './pages/hombre/hombre.component';


@NgModule({
  declarations: [
    HombreComponent
  ],
  imports: [
    CommonModule,
    HombreRoutingModule
  ]
})
export class HombreModule { }
