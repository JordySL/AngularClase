import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './../models/cliente';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  items: Cliente[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 0;

  constructor(public _clienteService: ClienteService) {
    this.GetClientes(1,5);
  }

  ngOnInit() {
  }
  GetClientes(offSet: Number, perPage: Number): void {
    this._clienteService.GetClientes(offSet, perPage)
      .subscribe((response: Cliente[]) => { 
        this.NumeroRecords = response[0].total,
        this.items = response });
  }
  changePage(event: any): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const offset = event.pageIndex + 1;
    this.GetClientes(offset, pageSize);
  }

  clickLike(event: any): void{
    console.log('click sobre like');
  }
  clickShare(){
    console.log('click sobre share');
  }
}
