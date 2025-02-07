import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { StudentsRoutingModule } from './students-routing.module';
import { RouterModule } from '@angular/router';
import { TableStudentComponent } from './table-student/table-student.component';
import { StudentGateway } from '../../domain/students/models/gateway/student_gateway';
import { StudentApiService } from '../../infrastructure/students/driven-adapters/student-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentsPageComponent,
    FormStudentComponent,
    TableStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule,
    HttpClientModule

  ],
  providers:[{provide:StudentGateway, useClass:StudentApiService}]
})
export class StudentsModule { }
