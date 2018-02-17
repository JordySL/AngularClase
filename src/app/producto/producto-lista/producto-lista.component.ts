import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './../models/producto';
import { NewProductoComponent } from './../new-producto/new-producto.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  items: Producto[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 0;

  constructor(public _productoService: ProductoService, public dialog: MatDialog) {
    this.getProductos(1, 5);

  }
  ngOnInit() { }
  getProductos(offSet: Number, perPage: Number): void {
    this._productoService.getProductos(offSet, perPage)
      .subscribe((response: Producto[]) => {
        this.NumeroRecords = response[0].total,
          this.items = response
      });
  }
  changePage(event: any): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const offset = event.pageIndex + 1;
    this.getProductos(offset, pageSize);
  }
  descargar(archivo: string): void {
    this._productoService.getArchivo(archivo)
      .subscribe(() => {
        console.log("exito descarga");
      });
  }
  openNewProducto() {
    let dialogRef = this.dialog.open(NewProductoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getProductos(1, 5);
    });
  }
  delete(id: number):void{
    this._productoService.deleteProducto(id)
    .subscribe((res:any)=>{
      this.getProductos(1,5);
    })
  }
}
