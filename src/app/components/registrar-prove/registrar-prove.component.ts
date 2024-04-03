import { Component } from '@angular/core';
import { Proveedores } from '../../models/proveedores';
import { ProveedorService } from '../../services/proveedores/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-prove',
  templateUrl: './registrar-prove.component.html',
  styleUrl: './registrar-prove.component.css'
})
export class RegistrarProveComponent {

  nuevoProveedor: Proveedores = new Proveedores();

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  crearProveedor(): void {
    if (this.formularioValido()){
      this.proveedorService.postProveedor(this.nuevoProveedor)
      .subscribe({
        next: (response: any) => {
          console.log('Proveedor creado.', response);
          this.router.navigate(['/listProveedor']);
        }
      })
    }
  }

  formularioValido(): boolean {
    if (
      !this.nuevoProveedor.nombre ||
      !this.nuevoProveedor.telefono ||
      !this.nuevoProveedor.correo ||
      !this.nuevoProveedor.producto
    ) {
      alert('Todos los campos son obligatorios.')
      return false;
    }
    return true;
  }
}
