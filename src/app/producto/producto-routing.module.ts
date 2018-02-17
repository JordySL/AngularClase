import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoContainerComponent } from './producto-container/producto-container.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
import { ProductoContentComponent } from './producto-content/producto-content.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { SearchGitHubComponent } from './search-git-hub/search-git-hub.component';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
const productoRoutes: Routes = [
  {
    path: '',
    component: ProductoContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'productoCards',
        pathMatch: 'full'
      },
      {
        path: 'productoCards',
        component: ProductoListaComponent
      },
      {
        path: 'productoTabla',
        component: ProductoTablaComponent
      },
      {
        path: 'productoContent',
        component: ProductoContentComponent
      },
      {
        path: 'userForm',
        component: UserFormComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        //canDeactivate: [PreventUnsavedChangesGuard]
      },
      {
        path: 'searchGitHub',
        component: SearchGitHubComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: 'progress',
        component: ProgressTrackerComponent,
        //canActivate: [AuthGuard]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(productoRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
