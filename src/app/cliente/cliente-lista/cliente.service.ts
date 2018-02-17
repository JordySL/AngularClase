import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Cliente } from './../models/cliente';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ClienteService {

  urlService: string = environment.urlService;

  constructor(private _http: Http) { }

  GetClientes(offSet: Number, perPage: Number): Observable<Cliente[]> {
    const url = `${this.urlService}api/cliente/GetClientes`;
    const params = { offSet: offSet, perPage: perPage }
    const header = new Headers({
      'Content-Type': 'application/json'});
    return this._http.post(url, params, { headers: header })
      .map((response: any) => {return response.json()
          .map((item:Cliente) => Cliente.mapFromResponse(item));
      });
  }
}
