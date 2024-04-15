import { Component, OnInit } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';
import { ProductoService } from '../../services/productos/producto.service';
import { Router } from '@angular/router';
import { Productos } from '../../models/productos';

@Component({
  selector: 'app-registrar-mermas',
  templateUrl: './registrar-mermas.component.html',
  styleUrl: './registrar-mermas.component.css'
})
export class RegistrarMermasComponent implements OnInit {

  nuevaMerma : Mermas = new Mermas();
  productos: Productos[] = [];

  constructor(private mermaService: MermaService, private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(productos => {
      this.productos = productos;
    });
  }

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

  onProductoSeleccionado(): void {
    const productoSeleccionado = this.productos.find(producto => producto.nombre === this.nuevaMerma.nombre_producto);
    if (productoSeleccionado) {
      this.nuevaMerma.codigo = productoSeleccionado.codigo;
    }
  }
}
