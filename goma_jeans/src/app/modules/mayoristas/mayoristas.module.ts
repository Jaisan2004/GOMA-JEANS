import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayoristasRoutingModule } from './mayoristas-routing.module';
import { MayoristasComponent } from './pages/mayoristas/mayoristas.component';


@NgModule({
  declarations: [
    MayoristasComponent
  ],
  imports: [
    CommonModule,
    MayoristasRoutingModule
  ]
})
export class MayoristasModule { }
