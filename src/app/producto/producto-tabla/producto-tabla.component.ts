import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ProductoService } from './../producto-lista/producto.service';


import { Producto } from './../models/producto';
@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit, AfterViewInit {
  ngOnInit() { }

  items: Producto[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 0;
  columns: object[] = [];
  colorP: string = 'yellow';
  @ViewChild('idLink') private idLink: TemplateRef<any>;
  @ViewChild('fechaLink') private fechaLink: TemplateRef<any>;
  @ViewChild('descLink') private descLink: TemplateRef<any>;

  constructor(public _productoService: ProductoService,
    public _changeDetector: ChangeDetectorRef) {
    this.getProductos(1, 5);
  }


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
  ngAfterViewInit(): void { 
    this.columns = [
    { name: 'Id', prop: 'id', template: this.idLink },
    { name: 'Descripcion', prop: 'descripcion', template: this.descLink },
    { name: 'StockMinimo', prop: 'stockMinimo' },
    { name: 'Fecha de Registro', prop: 'fechaRegistro', template: this.fechaLink }
  ];
  this._changeDetector.detectChanges();
  }
}
