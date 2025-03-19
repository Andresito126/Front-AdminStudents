import { Component } from '@angular/core';
import { CreateInscriptionUseCase } from '../../../domain/inscriptions/usecases/createInscription_useCase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css'],
})
export class InscriptionFormComponent {
  student_id: number = 0;
  course_id: number = 0;
  status: string = 'pendiente';
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private createInscriptionUseCase: CreateInscriptionUseCase, 
    private router: Router 
  ) {}

  
  onSubmit(): void {
    if (this.student_id === 0 || this.course_id === 0 || !this.status) {
      this.error = 'Por favor, complete todos los campos.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.createInscriptionUseCase.execute(this.student_id, this.course_id, this.status).subscribe(
      (inscription) => {
        console.log('Inscripción creada exitosamente:', inscription);
        this.loading = false;
        this.router.navigate(['/inscriptions']);
      },
      (err) => {
        console.error('Error al crear la inscripción:', err);
        this.error = 'Hubo un problema al crear la inscripción. Inténtalo de nuevo.';
        this.loading = false;
      }
    );
  }
}
