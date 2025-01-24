import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombreComponent } from './pages/hombre/hombre.component';

const routes: Routes = [
  { path: '', component: HombreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HombreRoutingModule { }
