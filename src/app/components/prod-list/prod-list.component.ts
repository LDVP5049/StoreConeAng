import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductoService } from '../../services/productos/producto.service';
import { Proveedores } from '../../models/proveedores';
import { ProveedorService } from '../../services/proveedores/proveedor.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css'],
})
export class ProdListComponent {
  proveedores: Proveedores[] = [];
  productos: Productos[] = [];
  productIdToDelete: string | null = null;
  seccionSeleccionada: string = 'Todas';

  constructor(
    private productoService: ProductoService,
    private proveedorService: ProveedorService
  ) {}

  //INICIA LOS SERVICIOS
  ngOnInit(): void {
    this.getProductos();
    this.getProveedores();
  }

  //OBTIENE LOS PRODUCTOS
  getProductos(): void {
    this.productoService
      .getProducto()
      .subscribe((result: Productos[]) => {
        if (this.seccionSeleccionada === 'Todas') {
          this.productos = result;
        } else {
          this.productos = result.filter(producto => {
            if (this.seccionSeleccionada === 'A') {
              return producto.seccion === '1A' || producto.seccion === '2A' || producto.seccion === '3A' || producto.seccion === '4A';
            } else if (this.seccionSeleccionada === 'B') {
              return producto.seccion === '1B' || producto.seccion === '2B' || producto.seccion === '3B' || producto.seccion === '4B';
            } else if (this.seccionSeleccionada === 'C') {
              return producto.seccion === '1C' || producto.seccion === '2C' || producto.seccion === '3C' || producto.seccion === '4C';
            } else if (this.seccionSeleccionada === 'D') {
              return producto.seccion === '1D' || producto.seccion === '2D' || producto.seccion === '3D' || producto.seccion === '4D';
            } else {
              return producto.seccion === this.seccionSeleccionada;
            }
          });
        }
      });
  }
  //OBTIENE LOS PROVEEDORES
  getProveedores(): void {
    this.proveedorService
      .getProveedores()
      .subscribe((result: Proveedores[]) => (this.proveedores = result));
  }
  //USA EL ID PARA ENCONTRAR EL NOMBRE
  getProveedorNombre(id: string): string {
    const proveedor = this.proveedores.find((p) => p.id === id);
    return proveedor ? proveedor.nombre : '';
  }
  //ELIMINA LOS PRODUCTOS
  confirmDelete(productId: string): void {
    if (productId) {
      this.productoService.deleteProducto(productId).subscribe((response) => {
        if (response && response.success) {
          this.productos = this.productos.filter(
            (producto) => producto.id !== productId
          );
          console.log('Producto eliminado exitosamente!');
          this.getProductos();
        } else {
          console.log('Error al eliminar el producto.');
          this.getProductos();
        }
      });
    }
  }
}
