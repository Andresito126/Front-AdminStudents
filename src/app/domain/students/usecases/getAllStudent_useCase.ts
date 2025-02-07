

import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Student } from '../models/student';
import { StudentGateway } from '../models/gateway/student_gateway';

@Injectable({
  providedIn: 'root'
})

export class GetStudentUseCase {
  constructor( private _studentGateway: StudentGateway) {}  
  // getStudentById (id: String) : Observable <Student> {
  //   return this._studentGateway.getByID(id);
  // }

  getAllStudent () : Observable <Array<Student>> {
    return this._studentGateway.getAll();
  }

}