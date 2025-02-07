

import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Student } from '../models/student';
import { StudentGateway } from '../models/gateway/student_gateway';
import { StudentListDTO } from '../adapters/studentList.dto';

@Injectable({
  providedIn: 'root'
})

export class GetStudentUseCase {
  // getStudentById (id: String) : Observable <Student> {
  //   return this._studentGateway.getByID(id);
  // }

  constructor(private _studentGateway: StudentGateway) {}

  getAllStudent(): Observable<Student[]> {
    return this._studentGateway.getAll(); 
  }
}