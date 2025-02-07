import { Injectable } from '@angular/core';
import { StudentGateway } from '../../../domain/students/models/gateway/student_gateway';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Student } from '../../../domain/students/models/student';
import { StudentMapper } from '../../../domain/students/adapters/student.mapper';
import { StudentListDTO } from '../../../domain/students/adapters/studentList.dto';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService extends StudentGateway {


  private _url = 'http://localhost:8080/students/';

  constructor(private _http: HttpClient) { 
    //siempre que se exitonde se debe de usar el super() para usar el this.
    super();
  }

  getByID(id: string): Observable<Student> {
    return this._http.get<Student>(`${this._url}/${id}`);
  }

  getAll(): Observable<Student[]> {
    return this._http
    .get<StudentListDTO>(this._url)
   .pipe(map(StudentMapper.fromDTO));
  }

 

  save(_stu: Student): Observable<Student> {
    return this._http.post<Student>(this._url, _stu);
  }

  update(id: number, _stu: Student): Observable<Student> {
    return this._http.put<Student>(`${this._url}/${id}`, _stu);
  }

  delete(id: number): Observable<Student> {
    return this._http.delete<Student>(`${this._url}/${id}`);
  }

}
