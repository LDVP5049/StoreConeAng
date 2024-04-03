import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../../models/productos';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlListar = 'Producto/Listar';
  urlCrear = 'Producto/Crear';
  urlEliminar = 'Producto/Borrar';

  constructor(private http:HttpClient) { }

  public getProducto():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.apiUrl}/${this.urlListar}`)
  }

  public postProducto(producto: Productos): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.urlCrear}`, producto);
  }

  public deleteProducto(id: string): Observable<any> {
    const url = `${environment.apiUrl}/${this.urlEliminar}/${id}`; 
    return this.http.delete<any>(url); 
  }

}
