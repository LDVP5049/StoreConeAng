import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../../services/proveedores/proveedor.service';
import { Proveedores } from '../../models/proveedores';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {
  proveedor: Proveedores | null = null;

  constructor(
    private route: ActivatedRoute,
    private proveedorService: ProveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const proveedorId = this.route.snapshot.paramMap.get('id');
    if (proveedorId) {
      this.proveedorService.getProveedor(proveedorId).subscribe((proveedor: Proveedores) => {
        this.proveedor = proveedor;
      });
    }
  }

  editarProveedor(): void {
    if (this.proveedor && this.proveedor.id) {
      this.proveedorService.updateProveedor(this.proveedor).subscribe(response => {
        console.log('Proveedor editado con éxito.');
        this.router.navigate(['/listProveedor']);
      });
    }
  }
  
}
