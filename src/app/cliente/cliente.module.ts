import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente-lista/cliente.service';
import { MatToolbarModule, MatListModule, MatCardModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClienteContainerComponent } from './cliente-container/cliente-container.component';
import { ClienteTablaComponent } from './cliente-tabla/cliente-tabla.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatCardModule, MatPaginatorModule, MatButtonModule, MatToolbarModule, MatListModule,
    SharedModule
  ],
  declarations: [SidebarComponent,
    ClienteListaComponent, ClienteContainerComponent, ClienteTablaComponent],
  providers: [ClienteService]
})
export class ClienteModule { }
