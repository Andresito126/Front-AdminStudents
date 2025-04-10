import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../domain/courses/models/course';
import { CourseGateway } from '../../../domain/courses/models/gateway/course_gateway';

import { GetAllCourseUseCase } from '../../../domain/useCases/courses/course-getAll.useCase';
import { CourseModel } from '../../../domain/models/courses/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[] = [];

  coursesM: CourseModel [] = [];

  constructor(
    private _courseGateway: CourseGateway,
    //
    private getAllCourseUC : GetAllCourseUseCase,
    private _router: Router,

  ) {}

  ngOnInit(): void {

    this.loadCourses();
  }

  loadCourses(): void {
    this.getAllCourseUC.execute().subscribe(
      (response)=>{
        this.coursesM = response;

      },
      (err)=>{
        console.log(err);
      }
    
    )
  }

  navigateToCreate(): void {
    this._router.navigate(['/courses/new']);
  }

  navigateToEdit(id: number): void {
    this._router.navigate(['/courses/edit', id]);
  }

  navigateToDetails(id: number): void {
    this._router.navigate(['/courses/details', id]);
  }

  deleteCourse(id: number): void {
    this._courseGateway.delete(id).subscribe(() => {
      this.loadCourses(); // recargar la lista después de eliminar
    });
  }
}