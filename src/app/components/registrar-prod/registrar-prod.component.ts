import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductoService } from '../../services/productos/producto.service';
import { Router } from '@angular/router';
import { Proveedores } from '../../models/proveedores';
import { ProveedorService } from '../../services/proveedores/proveedor.service';

@Component({
  selector: 'app-registrar-prod',
  templateUrl: './registrar-prod.component.html',
  styleUrls: ['./registrar-prod.component.css']
})
export class RegistrarProdComponent implements AfterViewInit {

  nuevoProducto: Productos = new Productos();
  proveedores: Proveedores []=[];

  @ViewChild('form') form!: ElementRef;

  constructor(private productoService: ProductoService, private router: Router,private proveedorService : ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((data: Proveedores[]) => {
        this.proveedores = data;
    });
  }

  ngAfterViewInit(): void {
    this.animateForm();
  }

  animateForm(): void {
    const formGroups = this.form.nativeElement.querySelectorAll('.form-group');
    for (let i = 0; i < formGroups.length; i++) {
      setTimeout(() => {
        formGroups[i].classList.add('fadeIn');
      }, i * 100);
    }
  }

  crearProducto(): void {
    if (this.formularioValido()) {
        this.productoService.postProducto(this.nuevoProducto)
            .subscribe({
                next: (response: any) => {
                    console.log('Producto creado:', response);
                    this.router.navigate(['/listaP']);
                },
                error: (error: any) => {
                    console.error('Error al crear producto:', error);
                }
            });
    }
  }

  formularioValido(): boolean {
    if (
      !this.nuevoProducto.nombre ||
      !this.nuevoProducto.codigo ||
      !this.nuevoProducto.seccion ||
      !this.nuevoProducto.proveedorId ||
      !this.nuevoProducto.descripcion ||
      !this.nuevoProducto.imagen ||
      !this.nuevoProducto.precio 
    ) {
      alert('Todos los campos son obligatorios.');
      return false;
    }
    return true;
  }
}
