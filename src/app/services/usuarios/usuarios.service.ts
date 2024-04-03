import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuarios';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlCrear = 'Usuario/Crear';
  urlListar = 'Usuario/Listar';

  constructor(private http: HttpClient) { }

  //OBTENER LOS USUARIOS
  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/${this.urlListar}`);
  }


  //VALIDACION PARA EL INICIO DE SESIÓN
  public iniciarSesion(usuario: string, contrasena: string): Observable<Usuario> {
    return this.getUsuarios().pipe(
      switchMap((usuarios: Usuario[]) => {
        const usuarioEncontrado = usuarios.find(u => u.nombreUsuario === usuario && u.contrasena === contrasena);
        return usuarioEncontrado ? of(usuarioEncontrado) : throwError('Usuario o contraseña incorrectos');
      })
    );
  }

  //AGREGAR MAS USUARIOS A LA BASE DE DATOS Y VALIDAR SI EL USUARIO YA EXISTE
  public postUsuario(usuario: Usuario): Observable<any> {
    return this.getUsuarios().pipe(
      switchMap((usuarios: Usuario[]) => {
        const usuarioExistente = usuarios.find(u => u.nombreUsuario === usuario.nombreUsuario);
        if (usuarioExistente) {
          return throwError('Usuario duplicado');
        } else {
          return this.http.post<any>(`${environment.apiUrl}/${this.urlCrear}`, usuario);
        }
      }),
      catchError(error => {
        return throwError('Usuario duplicado');
      })
    );
  }
}
