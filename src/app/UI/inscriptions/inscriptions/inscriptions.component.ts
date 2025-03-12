import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GetInscriptionsUseCase } from '../../../domain/inscriptions/usecases/getInscriptions_useCase';
import { Inscription } from '../../../domain/inscriptions/models/inscription';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
})
export class InscriptionComponent implements OnInit, OnDestroy {
  inscriptions: Inscription[] = []; 
  loading: boolean = true;
  error: string = '';
  pollingInterval: any; 

  constructor(
    private getInscriptionsUseCase: GetInscriptionsUseCase,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInscriptions(); 
    // el polling
    this.startPolling(); 
  }

  ngOnDestroy(): void {
    this.stopPolling(); 
  }

  // inscripciones
  loadInscriptions(): void {
    console.log('Iniciando carga de inscripciones...');

    this.getInscriptionsUseCase.execute().subscribe(
      (response: any) => {
        console.log('Respuesta obtenida de la API:', response);

        if (Array.isArray(response)) {
          console.log('La respuesta es un array. Procesando datos...');
          
          
          this.inscriptions = response.map((inscription) => ({
            ...inscription,
            student_id: inscription.student_id,
            course_id: inscription.course_id,
            status: inscription.status,
          }));

          console.log('Inscripciones procesadas:', this.inscriptions);
          this.loading = false;
        } else {
          console.error('La respuesta no es un array. Respuesta:', response);
          this.error = 'Error al cargar las inscripciones. Los datos no están en el formato esperado.';
          this.loading = false;
        }
      },
      (error) => {
        console.error('Error al cargar inscripciones:', error);
        this.error = `Error al cargar inscripciones: ${error.message}`;
        this.loading = false;
      }
    );
  }

  
  startPolling(): void {
    this.pollingInterval = setInterval(() => {
      this.loadInscriptions(); 
    }, 5000); 
  }

  
  stopPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval); 
    }
  }


  openForm(): void {
    console.log('Abriendo formulario para nueva inscripción...');
    this.router.navigate(['/inscriptions/new']);
  }
}
