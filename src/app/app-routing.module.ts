import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'students', loadChildren: () => import('./UI/students/students.module').then(m => m.StudentsModule) },
  { path: 'courses', loadChildren: () => import('./UI/courses/courses.module').then(m => m.CoursesModule) }, 
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }