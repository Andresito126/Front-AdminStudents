import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course'; 
import { CourseGateway } from '../models/gateway/course_gateway';

@Injectable({
  providedIn: 'root',
})
export class FindAllCoursesUseCase {
  constructor(private _courseGateway: CourseGateway) {}

  finAllCourses(): Observable<Course[]> {
    return this._courseGateway.findAll();
  }
}