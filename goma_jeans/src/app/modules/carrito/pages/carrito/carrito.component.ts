import { Component, OnInit } from '@angular/core';

interface CartProduct {
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  totalPrice: number = 0;

  ngOnInit() {
    // Datos de ejemplo para el carrito; en un caso real, podrías obtener esta información de un servicio.
    this.cartProducts = [
      { name: 'Jeans Skinny', price: 50000, size: 'M', quantity: 1, image: 'assets/jeans1.jpg' },
      { name: 'Jeans Regular', price: 60000, size: 'L', quantity: 2, image: 'assets/jeans2.jpg' }
    ];
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartProducts.reduce(
      (sum, product) => sum + (product.price * product.quantity),
      0
    );
  }

  placeOrder() {
    // Genera el mensaje de pedido con la información de cada producto
    let orderDetails = 'Hola, me gustaría hacer un pedido:\n\n';
    this.cartProducts.forEach(product => {
      orderDetails += `Producto: ${product.name}\nPrecio: $${product.price}\nTalla: ${product.size}\nCantidad: ${product.quantity}\n\n`;
    });
    orderDetails += `Total: $${this.totalPrice}`;

    // Codifica el mensaje para incluirlo en la URL
    const encodedMessage = encodeURIComponent(orderDetails);

    // Reemplaza el siguiente número por el número de WhatsApp de destino (sin símbolos ni espacios)
    const whatsappNumber = '573219465268';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  }
}
