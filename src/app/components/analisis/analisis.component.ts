import { Component, OnInit } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {
  mermas: Mermas[] = [];
  conteoMermas: { name: string; value: number; color: string }[] = [];

  // Datos para la gráfica
  view: [number, number] = [700, 400];
  gradient = false;
  showLegend = true;
  showXAxis = true;  // Añade esta línea
  showYAxis = true;  // Añade esta línea
  xAxisLabel = 'Producto';
  yAxisLabel = 'Mermas';
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(private mermasService: MermaService) {}

  ngOnInit(): void {
    this.getMermas();
  }

  getMermas(): void {
    this.mermasService.getMermas().subscribe((result: Mermas[]) => {
      this.mermas = result;
      this.contarMermas();
    });
  }

  contarMermas(): void {
    this.conteoMermas = this.mermas.map(merma => {
      const value = this.mermas.filter(m => m.nombre_producto === merma.nombre_producto).length;
      const color = '#' + Math.floor(Math.random()*16777215).toString(16); // Genera un color aleatorio
      return { name: merma.nombre_producto, value, color };
    });
  }




  
  
  
  
  
  
  
  
  
  
  
  
  
}

