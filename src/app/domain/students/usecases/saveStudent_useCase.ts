

import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Student } from '../models/student';
import { StudentGateway } from '../models/gateway/student_gateway';
import { StudentListDTO } from '../adapters/studentList.dto';

@Injectable({
  providedIn: 'root'
})

export class SaveStudentUseCase {

  constructor(private _studentGateway: StudentGateway) {}

  saveStudent(student: Student): Observable<Student> {
    return this._studentGateway.save(student);
  }
} 