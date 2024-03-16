import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

const routes: Routes = [

  {
    path: 'ejercicio1',
    component: Ejercicio1Component
  },

  {
    path: 'ejercicio2',
    component: Ejercicio2Component
  },

  {
    path: '',
    redirectTo: '/ejercicio1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
