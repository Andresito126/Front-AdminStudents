import { Injectable } from '@angular/core';
import { StudentGateway } from '../../../domain/students/models/gateway/student_gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../../domain/students/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService extends StudentGateway {


  private _url = 'http://localhost:8080/students';

  constructor(private _http: HttpClient) { 
    //siempre que se exitonde se debe de usar el super() para usar el this.
    super();
  }

  getByID(id: string): Observable<Student> {
    return this._http.get<Student>(`${this._url}/${id}`);
  }

  getAll(): Observable<Student[]> {
    return this._http.get<Student[]>(this._url);
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
