import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedores } from '../../models/proveedores';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  urlCrear = 'Proveedor/Create';
  urlListar = 'Proveedor/Listar';
  urlEliminar = 'Proveedor/Deleteby';
  

  constructor(private http: HttpClient) { }
  
    //LISTAR LOS PROVEEDORES
    public getProveedores(): Observable<Proveedores[]> {
      return this.http.get<Proveedores[]>(`${environment.apiUrl}/${this.urlListar}`);
    }

    //REGISTRAR UN PROVEEDOR
    public postProveedor(proveedor: Proveedores): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/${this.urlCrear}`, proveedor)
    } 

    //ELIMINAR PROVEEDORES
    public deleteProveedor(id: string): Observable<any>{
      const url= `${environment.apiUrl}/${this.urlEliminar}${id}`;
      return this.http.delete<any>(url);
    }

}
