import { Component } from '@angular/core';

@Component({
  selector: 'app-hombre',
  standalone: false,
  
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {
  sueldos = [1700, 1600, 1900, 1, 1, 1];
}
