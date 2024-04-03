import { Component, OnInit } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {
  mermas: Mermas[] = [];
  conteoMermas: { tipo: string; cantidad: number; color: string }[] = [];

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
    const tiposMerma = ['Robo', 'Caducidad', 'Defectuoso'];
    this.conteoMermas = tiposMerma.map(tipo => {
      const cantidad = this.mermas.filter(merma => merma.tipo_de_merma === tipo).length;
      let color = '';
      switch (tipo) {
        case 'Robo':
          color = '#ff6347'; // Rojo
          break;
        case 'Caducidad':
          color = '#4682b4'; // Azul
          break;
        case 'Defectuoso':
          color = '#32cd32'; // Verde
          break;
        default:
          color = '#000000'; // Color por defecto
          break;
      }
      return { tipo, cantidad, color };
    });
  }
}
