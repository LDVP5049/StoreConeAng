import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mermas } from '../../models/mermas';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MermaService {

  //VARIABLES DE LA URL
  urlListar = 'Mermas/Listar';
  urlCrear = 'Mermas/Insertar';
  urlEliminar = 'Mermas/Delete?id=';

  constructor(private http: HttpClient) { }

  //OBTENER LOS REGISTROS DE MERMAS
  public getMermas():Observable<Mermas[]>{
    return this.http.get<Mermas[]>(`${environment.apiUrl}/${this.urlListar}`)
  }

  //AGREGAR REGISTROS
  public postMermas(merma: Mermas): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.urlCrear}`, merma)
  }

  //ELIMINAR REGISTROS
  public deleteMerma(id: string): Observable<any> {
    const url= `${environment.apiUrl}/${this.urlEliminar}${id}`;
    return this.http.delete<any>(url);
  }
}
