import { Component } from '@angular/core';

@Component({
  selector: 'app-mujer',
  standalone: false,
  
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css'
})
export class MujerComponent {
  sueldos = [1700, 1600, 1900, 1, 1, 1, 1, 1, 1, 1];
}
