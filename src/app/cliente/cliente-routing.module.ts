import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteContainerComponent } from './cliente-container/cliente-container.component';

import { ClienteTablaComponent } from './cliente-tabla/cliente-tabla.component';
const clienteRoutes: Routes = [
  {
    path: '',
    component: ClienteContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'cliente-lista',
        pathMatch: 'full'
      },
      {
        path: 'cliente-lista',
        component: ClienteListaComponent
      },
      {
        path: 'cliente-tabla',
        component: ClienteTablaComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(clienteRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
