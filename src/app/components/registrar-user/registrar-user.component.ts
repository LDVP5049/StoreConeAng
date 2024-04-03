import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Usuario } from '../../models/usuarios';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrl: './registrar-user.component.css'
})
export class RegistrarUserComponent {
  
  nuevoUsuario : Usuario = new Usuario();

  togglePasswordVisibility() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  constructor(private usuarioService : UsuariosService, private router: Router) {}


  crearUsuario(): void {
    if (this.formularioValido()) {
      this.usuarioService.postUsuario(this.nuevoUsuario)
      .subscribe({
        next: (response: any) => {
          console.log('Usuario creado:', response);
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Error al crear el usuario:', error);
          if (error === 'Usuario duplicado') {
            alert('El usuario ya existe');
          }
        }
      });
    }
  }

  formularioValido(): boolean{
    if(
      !this.nuevoUsuario.nombreUsuario ||
      !this.nuevoUsuario.contrasena
    ){
      alert('Debes llenar los campos');
      return false;
    }
    return true;
  }
}
