import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Course } from '../../../domain/courses/models/course';
import { CourseListDTO } from '../../../domain/courses/adapters/courseList.dto';
import { CourseMapper } from '../../../domain/courses/adapters/course.mapper';
import { CourseGateway } from '../../../domain/courses/models/gateway/course_gateway';

@Injectable({
  providedIn: 'root',
})
export class CourseApiService extends CourseGateway {
  private _url = 'http://localhost:8080/courses/'; 

  constructor(private _http: HttpClient) {
    super(); 
  }

  // Obtener un curso por ID
  getByID(id: string): Observable<Course> {
    return this._http.get<Course>(`${this._url}${id}`);
  }

  
  findAll(): Observable<Course[]> {
    return this._http
      .get<CourseListDTO>(this._url)
      .pipe(map(CourseMapper.fromDTO)); // mappr para transformar el DTO
  }

  
  save(course: Course): Observable<Course> {
    return this._http.post<Course>(this._url, course);
  }

  
  update(id: number, course: Course): Observable<Course> {
    return this._http.put<Course>(`${this._url}${id}`, course);
  }

  
  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}${id}`);
  }
}