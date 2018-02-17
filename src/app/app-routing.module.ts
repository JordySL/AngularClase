import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const appRouters: Routes = [
  { path: 'producto', loadChildren: 'app/producto/producto.module#ProductoModule' },
  { path: '', redirectTo: 'producto', pathMatch: 'full' },
  { path: 'cliente', loadChildren: 'app/cliente/cliente.module#ClienteModule' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
