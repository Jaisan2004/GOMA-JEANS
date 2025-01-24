import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mayoristas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './mayoristas.component.html',
  styleUrls: ['./mayoristas.component.css'],
})
export class MayoristasComponent {
  mayoristasForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mayoristasForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.mayoristasForm.valid) {
      console.log('Formulario enviado:', this.mayoristasForm.value);
      alert('Formulario enviado correctamente. ¡Nos comunicaremos pronto contigo!');
      this.mayoristasForm.reset();
    }
  }
}
