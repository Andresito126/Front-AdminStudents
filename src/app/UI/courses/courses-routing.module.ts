import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  { path: '', component: CoursesComponent }, 
  { path: 'new', component: CourseFormComponent }, 
  { path: 'edit/:id', component: CourseFormComponent }, 
  { path: 'details/:id', component: CourseDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule],
})
export class CoursesRoutingModule {}