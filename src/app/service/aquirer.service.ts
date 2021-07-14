import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api.response';
import { Observable } from "rxjs/index";
import { rechazonacional } from '../model/rechazonacional.model';
import { fuentepapelParam } from '../model/fuentepapelParam.model';
import { detallerechazoNac } from '../model/detallerechazoNac.model';

@Injectable({
  providedIn: 'root'
})
export class AquirerService {

  constructor(private http: HttpClient) { }
  baseUrl: string = '/api/';


  /////////////////////////Banorte////////////////////////////////

  getConsultaRechazo(): Observable<ApiResponse[]> {
    let headers = new HttpHeaders();

    headers = headers.set('accept', 'application/json').set('AUTH_API_KEY', 'abcd123456');
    return this.http.get<ApiResponse[]>(this.baseUrl + 'getConsultaRechazo', { headers });
  }

  getRechazoDetalle(NumerodeCuenta: string): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('accept', 'application/json').set('AUTH_API_KEY', 'abcd123456');
    return this.http.get<any>(this.baseUrl + 'getConsultaRechazo/' + NumerodeCuenta, { headers });
  }


  getFuentepapelDetalle(fuentepapelParam : fuentepapelParam): Observable<ApiResponse[]> {
    let headers = new HttpHeaders();

    headers = headers.set('accept', 'application/json').set('AUTH_API_KEY', 'abcd123456');
    return this.http.get<ApiResponse[]>(this.baseUrl + 'getfuentepapel/' +
    fuentepapelParam.fechaArribo + '/' + fuentepapelParam.NumAutoriza + '/' + fuentepapelParam.codigoTransaccion, { headers });
  }

  getFuentepapel(): Observable<ApiResponse[]> {
    let headers = new HttpHeaders();

    headers = headers.set('accept', 'application/json').set('AUTH_API_KEY', 'abcd123456');
    return this.http.get<ApiResponse[]>(this.baseUrl + 'getfuentepapel', { headers });
  }
  
}
