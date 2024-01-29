import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Usuario } from '../Interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private endpoint:string = environment.endpoint;
  private myApiUrl:string = this.endpoint + "Usuario/";

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.myApiUrl}Lista`);
  }

  addUsuario(request:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.myApiUrl}Guardar`,request);
  }

  deleteUsuario(IdUsuario:number): Observable<void>{
    return this.http.delete<void>(`${this.myApiUrl}Eliminar/${IdUsuario}`);
  }
}
