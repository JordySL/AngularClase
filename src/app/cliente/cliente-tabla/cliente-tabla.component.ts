import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ClienteService } from './../cliente-lista/cliente.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cliente } from './../models/cliente';
@Component({
  selector: 'app-cliente-tabla',
  templateUrl: './cliente-tabla.component.html',
  styleUrls: ['./cliente-tabla.component.css']
})
export class ClienteTablaComponent implements OnInit, AfterViewInit {

  items : Cliente[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 0;

  columns: object[] = [];
  @ViewChild('idLink') private idLink: TemplateRef<any>;
  constructor(public _clienteService: ClienteService,
    public _changeDetector: ChangeDetectorRef) {
    this.getClientes(1,5);
  }
  ngOnInit() {
  }
  
  getClientes(offSet: Number, perPage: Number): void {
    this._clienteService.GetClientes(offSet, perPage)
      .subscribe((response: Cliente[]) => 
      { this.items = response });
  }

  changePage(event: any): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const offset = event.pageIndex + 1;
    this.getClientes(offset, pageSize);
  }

  ngAfterViewInit(): void { 
    this.columns = [{ name: 'Id', prop: 'id', template: this.idLink },
    { name: 'Nombre', prop: 'nombre' }
  ];
  this._changeDetector.detectChanges();
  }

}
