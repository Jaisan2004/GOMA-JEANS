import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MujerComponent } from './pages/mujer/mujer.component';

const routes: Routes = [
  { path: '', component: MujerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MujerRoutingModule { }
