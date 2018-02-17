import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewProductoService } from './new-producto.service';
@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css'],
  providers: [NewProductoService]
})
export class NewProductoComponent implements OnInit {

  descripcion: string = "";
  stock: string = "";
  @ViewChild("fileInput") fileInput;

  constructor(private _service: NewProductoService,
    public dialogRef: MatDialogRef<NewProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }
  guardarProducto() {
    const fi = this.fileInput.nativeElement;

    this._service.guardarProducto(fi,this.descripcion, this.stock,)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
