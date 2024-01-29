import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../Interfaces/cita';
//import { request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private endpoint:string = environment.endpoint;
  private myApiUrl:string = 'api/Cita/';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]>{
    return this.http.get<Cita[]>(`${this.endpoint}${this.myApiUrl}Lista`);
  }
  
  getCita(IdCita: number): Observable<Cita>{
    return this.http.get<Cita>(`${this.endpoint}${this.myApiUrl}${IdCita}`);
  }

  addCita(request:Cita): Observable<Cita>{
    return this.http.post<Cita>(`${this.endpoint}${this.myApiUrl}Guardar`,request);
  }

  deleteCita(IdCita:number): Observable<void>{
    return this.http.delete<void>(`${this.endpoint}${this.myApiUrl}Eliminar/${IdCita}`);
  }
  
  updateCita(id:number, Cita: Cita): Observable<Cita>{
    return this.http.put<Cita>(`${this.endpoint}${this.myApiUrl}${id}`, Cita);
  }

}
