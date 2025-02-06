import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  standalone: false,
  
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  @Input() totalPages: number = 1;
  @Input() modulo: any;
  @Input() pagina: number = 0;
  @Input() talla: string = "0";
  @Input() marca: string = "0";
  currentPage: number = 1;
  constructor() {
    this.currentPage = this.pagina;
  }

  ngOnInit() {
    this.currentPage = this.pagina;
  }

  ngOnChanges() {
    this.currentPage = this.pagina;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
