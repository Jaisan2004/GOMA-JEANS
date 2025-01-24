import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MujerRoutingModule } from './mujer-routing.module';
import { MujerComponent } from './pages/mujer/mujer.component';


@NgModule({
  declarations: [
    MujerComponent
  ],
  imports: [
    CommonModule,
    MujerRoutingModule
  ]
})
export class MujerModule { }
