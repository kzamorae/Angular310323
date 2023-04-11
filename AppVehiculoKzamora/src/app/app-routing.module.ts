import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';

const routes: Routes = [
  {
    path:'vehiculos',
    component:VehiculosComponent
  },
  {
    path:'vehiculos/:codigo',
    component:VehiculoDetalleComponent
  },
  {
    path:'clientes',
    component:VehiculosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
