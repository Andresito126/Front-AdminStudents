import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseGateway } from '../models/gateway/course_gateway';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class DeleteCourseUseCase {
  constructor(private _courseGateway: CourseGateway) {}

  deleteCourse(id: number): Observable<void> {
    return this._courseGateway.delete(id);
  }
}