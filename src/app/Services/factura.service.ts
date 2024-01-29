import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Factura } from '../Interfaces/factura';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private endpoint:string = environment.endpoint;
  private myApiUrl:string = this.endpoint + "Factura/";

  constructor(private http:HttpClient) { }

  getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(`${this.myApiUrl}Lista`);
  }

  addFactura(request:Factura): Observable<Factura>{
    return this.http.post<Factura>(`${this.myApiUrl}Guardar`,request);
  }

  deleteFactura(IdFactura:number): Observable<void>{
    return this.http.delete<void>(`${this.myApiUrl}Eliminar/${IdFactura}`);
  }
}
