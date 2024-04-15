import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
 
  valorContador: number = 0;

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }
}
