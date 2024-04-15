import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Mermas } from '../../models/mermas';
import { MermaService } from '../../services/mermas/merma.service';

@Component({
  selector: 'app-mermas-list',
  templateUrl: './mermas-list.component.html',
  styleUrl: './mermas-list.component.css'
})
export class MermasListComponent implements OnInit, AfterViewInit {
  @ViewChild('myTable') myTable!: ElementRef;

  mermas: Mermas[] = [];
  mermaIdToDelete: string | null = null;

  constructor(private mermaService: MermaService) {}

  ngOnInit(): void {
    this.getMermas();
  } 

  ngAfterViewInit(): void {
    this.myTable.nativeElement.style.opacity = 0;
    setTimeout(() => {
      this.myTable.nativeElement.style.transition = 'opacity 1s';
      this.myTable.nativeElement.style.opacity = 1;
    }, 0);
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
