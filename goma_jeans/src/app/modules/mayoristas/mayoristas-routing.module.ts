import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayoristasComponent } from './pages/mayoristas/mayoristas.component';

const routes: Routes = [
  { path: '', component: MayoristasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayoristasRoutingModule { }
