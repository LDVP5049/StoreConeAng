import { Component } from '@angular/core';
import { Proveedores } from '../../models/proveedores';
import { ProveedorService } from '../../services/proveedores/proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrl: './proveedor-list.component.css'
})
export class ProveedorListComponent {

  proveedores: Proveedores[]=[];
  proveedorIdToDelete: string | null = null;

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void{
    this.getProveedores();
  }

  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe((result: Proveedores[]) => (this.proveedores = result))
  }

  confirmDelete(proveedorId:string): void{
    if (proveedorId){
      this.proveedorService.deleteProveedor(proveedorId).subscribe(
        (response) => {
          if (response && response.success) {
            this.proveedores = this.proveedores.filter(proveedor => proveedor.id !== proveedorId);
            console.log('Proveedor eliminado con exito.');
            this.getProveedores();
          } else {
            console.log('Error al eliminar el proveedor.')
            this.getProveedores();
          }
        }
      )
    }
  }
}
