import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private usuariosService: UsuariosService) {}

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const showPasswordIcon = document.getElementById('showPasswordIcon');

    if (passwordInput && showPasswordIcon) {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }

      showPasswordIcon.classList.add('rotate');

      setTimeout(() => {
        showPasswordIcon.classList.remove('rotate');
      }, 500);
    }
  }

  iniciarSesion(usuario: string, contrasena: string) {
    this.usuariosService.iniciarSesion(usuario, contrasena).subscribe(
      (usuario) => {
        this.router.navigate(['/inicio']);
        this.router.navigate(['/listaP']);
      },
      (error) => {
        alert('Usuario o contraseña incorrectos');
      }
    );
  }

  navigateToRegistrarUser() {
    this.router.navigate(['/registraruser']);
  }
}
