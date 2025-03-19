import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionGateway } from '../../domain/inscriptions/models/gateway/inscription_gateway';
import { InscriptionApiService } from '../../infrastructure/inscriptions/driven-adapters/inscription-api-service.service';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscriptions/inscriptions.component';
import { StudentApiService } from '../../infrastructure/students/driven-adapters/student-api.service';
import { CourseApiService } from '../../infrastructure/courses/driven-adapters/course-api-service.service';
import { CreateInscriptionUseCase } from '../../domain/inscriptions/usecases/createInscription_useCase';

@NgModule({
  declarations: [
    InscriptionFormComponent,
    InscriptionComponent

  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule, 
    RouterModule,
    FormsModule, 
    ReactiveFormsModule, 
    
  ],
    providers:[
      {provide:InscriptionGateway, useClass:InscriptionApiService},
      {provide: 'StudentApiService', useClass: StudentApiService }, 
      {provide: 'CourseApiService', useClass: CourseApiService },
      CreateInscriptionUseCase 

    ]
    
})
export class InscriptionsModule {}