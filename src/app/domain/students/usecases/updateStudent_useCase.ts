import { Injectable } from '@angular/core';
import { StudentGateway } from '../models/gateway/student_gateway';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentUseCase {
  constructor(private _studentGateway: StudentGateway) {}

  updateStudent(id: number, student: Student): Observable<Student> {
    return this._studentGateway.update(id, student);
  }
}
