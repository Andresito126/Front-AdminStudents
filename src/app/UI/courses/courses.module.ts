import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { CourseGateway } from '../../domain/courses/models/gateway/course_gateway';
import { CourseApiService } from '../../infrastructure/courses/driven-adapters/course-api-service.service';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[{provide:CourseGateway, useClass:CourseApiService}]
})
export class CoursesModule { }
