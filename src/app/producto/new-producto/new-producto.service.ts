import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
@Injectable()
export class NewProductoService {

  baseUrl: string = `${environment.urlService}`
  constructor(private _http: Http) { }

  guardarProducto(fileToUpload: any,descripcion: string, stock: string) {
    const url: string = `${this.baseUrl}api/producto/GuardarProducto`;
    let parameters = new FormData();
    parameters.append("files", fileToUpload.files[0]);
    parameters.append("descripcion", descripcion);
    parameters.append("stockminimo", stock);

    return this._http.post(url, parameters)
      .map((reponse:any)=>{
        console.log('exito');
      });
  }
}
