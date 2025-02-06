import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'productos', loadChildren: () => import('./modules/hombre/hombre.module').then(m => m.HombreModule) },
  { path: 'mayoristas', loadChildren: () => import('./modules/mayoristas/mayoristas.module').then(m => m.MayoristasModule) },
  { path: 'carrito', loadChildren: () => import('./modules/carrito/carrito.module').then(m => m.CarritoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
