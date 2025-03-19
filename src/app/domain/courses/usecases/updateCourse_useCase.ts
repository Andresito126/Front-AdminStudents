import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { CourseGateway } from '../models/gateway/course_gateway';

@Injectable({
  providedIn: 'root',
})
export class UpdateCourseUseCase {
  constructor(private _courseGateway: CourseGateway) {}

  updateCourse(id: number, course: Course): Observable<Course> {
    return this._courseGateway.update(id, course);
  }
}