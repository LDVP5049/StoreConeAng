import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Este método solo realiza la navegación, sin necesidad de usuario o contraseña.
  iniciarSesion() {
    // Aquí puedes hacer alguna acción si lo necesitas (por ejemplo, guardar el estado de sesión)
    this.router.navigate(['/inicio']);  // Redirige a la página principal (o a donde quieras)
    this.router.navigate(['/listaP']);  // Si tienes otra página a la que redirigir después
  }

  navigateToRegistrarUser() {
    this.router.navigate(['/registraruser']);
  }
}
