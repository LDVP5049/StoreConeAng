import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
 // ACTUALIZAR UN PROVEEDOR
public updateProveedor(proveedor: Proveedores): Observable<any> {
  if (proveedor.id) {
    const url = `${environment.apiUrl}/Proveedor/Update`;
    const params = new HttpParams().set('id', proveedor.id);
    return this.http.put<any>(url, proveedor, { params });
  } else {
    // Maneja el caso en que proveedor.id es undefined
    console.error('El id del proveedor es undefined');
    return throwError('El id del proveedor es undefined');
  }
}






//OBTENER UN PROVEEDOR
public getProveedor(id: string): Observable<Proveedores> {
  const url= `${environment.apiUrl}/Proveedor/${id}`;
  return this.http.get<Proveedores>(url);
}



}
