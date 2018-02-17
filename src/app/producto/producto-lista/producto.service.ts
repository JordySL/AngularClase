import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Producto } from './../models/producto';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
@Injectable()
export class ProductoService {

  urlService: string = environment.urlService;

  constructor(private _http: Http) { }

  getProductos(offSet: Number, perPage: Number): Observable<Producto[]> {
    const url = `${this.urlService}api/producto/GetProductos`;
    const params = { offSet: offSet, perPage: perPage }
    const header = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(url, params, { headers: header })
      .map((response: any) => {
        return response.json()
          .map((item: Producto) => Producto.mapFromResponse(item));
      });
  }
  getArchivo(archivo: string): Observable<void> {
    const url = `${this.urlService}api/producto/GetArchivo`;
    const params = { archivo: archivo };
    const header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    options.responseType = ResponseContentType.Blob;
    return this._http.post(url, params, options)
      .map((response: any) => {
        let fileBlob = response.blob();
        let blob = new Blob([fileBlob], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, archivo);
      });
  }
  deleteProducto(id: number): Observable<void> {
    const url = `${this.urlService}api/producto`;
    const header = new Headers({ 'Content-Type': 'application/json' });
    return this._http.delete(`${url}/${id}`, {headers:header})
    .map((response:any)=>{
    })
  }
}
