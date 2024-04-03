import { Component } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';

@Component({
  selector: 'app-mermas-list',
  templateUrl: './mermas-list.component.html',
  styleUrl: './mermas-list.component.css'
})
export class MermasListComponent {

  mermas: Mermas[] = [];
  mermaIdToDelete: string | null = null;

  constructor(private mermaService: MermaService) {}

  ngOnInit(): void {
    this.getMermas();
  } 

  getMermas(): void {
    this.mermaService.getMermas().subscribe((result: Mermas[]) => (this.mermas = result));
  }

  confirmDelete(mermaId: string): void {
    if (mermaId) {
      this.mermaService.deleteMerma(mermaId).subscribe(
        (response) => {
          if (response && response.success) {
            this.mermas = this.mermas.filter(merma => merma.id !== mermaId);
            console.log('Merma eliminada exitosamente');
            this.getMermas();
          } else {
            console.log('Error al eliminar merma')
            this.getMermas();
          }
        });
    }
  }
}
