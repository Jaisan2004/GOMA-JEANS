import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentIndex = 0; // Índice para el carrusel de mujeres
  currentIndex2 = 0; // Índice para el carrusel de hombres

  // Productos de ejemplo para mujeres
  womenProducts = [
    { name: 'Jeans Skinny', price: 50000, sizes: 'S, M, L', image: 'assets/jeans1.png' },
    { name: 'Jeans Mom Fit', price: 55000, sizes: 'S, M, L', image: 'assets/jeans2.png' },
    { name: 'Jeans Rectos', price: 60000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
    { name: 'Jeans Vintage', price: 80000, sizes: 'S, M, L', image: 'assets/jeans1.png' },
    { name: 'Jeans Baggy', price: 65000, sizes: 'S, M, L', image: 'assets/jeans2.png' },
    { name: 'Jeans Clásicos', price: 70000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
    { name: 'Jeans Skinny', price: 50000, sizes: 'S, M, L', image: 'assets/jeans1.png' },
    { name: 'Jeans Mom Fit', price: 55000, sizes: 'S, M, L', image: 'assets/jeans2.png' },
    { name: 'Jeans Rectos', price: 60000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
    { name: 'Jeans Vintage', price: 80000, sizes: 'S, M, L', image: 'assets/jeans1.png' },
    { name: 'Jeans Baggy', price: 65000, sizes: 'S, M, L', image: 'assets/jeans2.png' },
    { name: 'Jeans Clásicos', price: 70000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
  ];

  // Productos de ejemplo para hombres
  menProducts = [
    { name: 'Jeans Slim Fit', price: 52000, sizes: 'M, L, XL', image: 'assets/jeans1.png' },
    { name: 'Jeans Regular', price: 56000, sizes: 'M, L, XL', image: 'assets/jeans2.png' },
    { name: 'Jeans Stretch', price: 58000, sizes: 'M, L, XL', image: 'assets/jeans3.png' },
    { name: 'Jeans Vintage', price: 62000, sizes: 'M, L, XL', image: 'assets/jeans1.png' },
    { name: 'Jeans Clásicos', price: 70000, sizes: 'M, L, XL', image: 'assets/jeans2.png' },
    { name: 'Jeans Baggy', price: 65000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
    { name: 'Jeans Slim Fit', price: 52000, sizes: 'M, L, XL', image: 'assets/jeans1.png' },
    { name: 'Jeans Regular', price: 56000, sizes: 'M, L, XL', image: 'assets/jeans2.png' },
    { name: 'Jeans Stretch', price: 58000, sizes: 'M, L, XL', image: 'assets/jeans3.png' },
    { name: 'Jeans Vintage', price: 62000, sizes: 'M, L, XL', image: 'assets/jeans1.png' },
    { name: 'Jeans Clásicos', price: 70000, sizes: 'M, L, XL', image: 'assets/jeans2.png' },
    { name: 'Jeans Baggy', price: 65000, sizes: 'S, M, L', image: 'assets/jeans3.png' },
  ];

  // Grupos de productos (3 productos por grupo)
  womenProductGroups = this.groupProducts(this.womenProducts, 6);
  menProductGroups = this.groupProducts(this.menProducts, 6);

  // Función para agrupar productos
  groupProducts(products: any[], groupSize: number) {
    const groups = [];
    for (let i = 0; i < products.length; i += groupSize) {
      groups.push(products.slice(i, i + groupSize));
    }
    return groups;
  }

  // Navegación del carrusel de mujeres
  prevWomen() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextWomen() {
    if (this.currentIndex < this.womenProductGroups.length - 1) {
      this.currentIndex++;
    }
  }

  // Navegación del carrusel de hombres
  prevMen() {
    if (this.currentIndex2 > 0) {
      this.currentIndex2--;
    }
  }

  nextMen() {
    if (this.currentIndex2 < this.menProductGroups.length - 1) {
      this.currentIndex2++;
    }
  }
}
