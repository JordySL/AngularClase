import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto-lista/producto.service';
import { MatToolbarModule, MatListModule, MatCardModule, MatPaginatorModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductoContainerComponent } from './producto-container/producto-container.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
import { SharedModule } from './../shared/shared.module';
import { NewProductoComponent } from './new-producto/new-producto.component';
import { ProductoContentComponent } from './producto-content/producto-content.component';
import { BsJumbotronComponent } from './bs-jumbotron/bs-jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchGitHubComponent } from './search-git-hub/search-git-hub.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './login/login.service';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductoRoutingModule,
    MatToolbarModule, MatListModule, MatCardModule, MatPaginatorModule, MatButtonModule, MatDialogModule,
    SharedModule
  ],
  declarations: [ProductoListaComponent, SidebarComponent, ProductoContainerComponent,
    ProductoTablaComponent, NewProductoComponent, ProductoContentComponent,
    BsJumbotronComponent, UserFormComponent, LoginComponent,
    SearchGitHubComponent, TruncatePipe, HighlightDirective, ProgressTrackerComponent],
  providers: [ProductoService, PreventUnsavedChangesGuard, AuthGuard,LoginService],
  entryComponents: [NewProductoComponent]
})
export class ProductoModule { }
