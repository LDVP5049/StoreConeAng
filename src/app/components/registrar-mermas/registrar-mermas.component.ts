import { Component } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-mermas',
  templateUrl: './registrar-mermas.component.html',
  styleUrl: './registrar-mermas.component.css'
})
export class RegistrarMermasComponent {

  nuevaMerma : Mermas = new Mermas();

  constructor(private mermaService: MermaService, private router: Router) {}

  crearMerma(): void {
    if (this.formularioValido()){
      this.mermaService.postMermas(this.nuevaMerma)
      .subscribe({
        next: (response: any) => {
          console.log('Merma creada:', response)
          this.router.navigate(['/listaMer']);
        },
        error: (error: any) => {
          console.error('Error al crear merma', error)
        }
      });
    }
  }

  formularioValido(): boolean{
    if (
      !this.nuevaMerma.codigo ||
      !this.nuevaMerma.nombre_producto ||
      !this.nuevaMerma.fecha_ingreso ||
      !this.nuevaMerma.tipo_de_merma
    ){
      alert('Todos los campos son obligatorios')
      return false;
    }
    return true;
  }
}
