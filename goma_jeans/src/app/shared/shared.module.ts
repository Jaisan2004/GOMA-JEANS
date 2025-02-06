import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PaginacionComponent,
    FormsModule
  ]
})
export class SharedModule { }
