import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  //definir url de la api obteniendola de environment.ts (no de prod.ts)
  urlBase = environment.apiURL+'todos/'; //para el reto mirar: Cómo utilizar Http Get en Angular [Archivo de video]. Youtube. https://www.youtube.com/watch?v=yIhxl-9YVsc y mostrarlos en una tabla con encabezados

  // constructor ya existia vacio constructor(){}, crear una instancia de tipo httpclient
  constructor(private http: HttpClient) { }

  //metodo para consumir la api   users
  getAll(): Observable<string>{
    const url = this.urlBase;

    return this.http.get<string>(url); //<string> es muy importante, sino se queda como mal escrito
  }
}
