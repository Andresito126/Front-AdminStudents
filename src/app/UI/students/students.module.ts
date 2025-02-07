import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { StudentsRoutingModule } from './students-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    StudentsPageComponent,
    FormStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule

  ]
})
export class StudentsModule { }
