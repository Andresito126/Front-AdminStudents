import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { CourseGateway } from '../models/gateway/course_gateway';

@Injectable({
  providedIn: 'root',
})
export class SaveCourseUseCase {
  constructor(private _courseGateway: CourseGateway) {}

  saveCourse(course: Course): Observable<Course> {
    return this._courseGateway.save(course);
  }
}