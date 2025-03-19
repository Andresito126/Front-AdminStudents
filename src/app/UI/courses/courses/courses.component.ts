// src/app/courses/courses/courses.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../domain/courses/models/course';
import { CourseGateway } from '../../../domain/courses/models/gateway/course_gateway';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private _courseGateway: CourseGateway,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this._courseGateway.findAll().subscribe((courses) => {
      this.courses = courses;
    });
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