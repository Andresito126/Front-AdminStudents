import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseRepository } from "../../../domain/repositories/courses/course.repository";
import { CourseModel } from "../../../domain/models/courses/course.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course, ResponseCourses } from "./entities/course-entity";
import { CourseCreateRepositoryMapper } from "./mappers/course-create-repository.mapper";
import { CourseUpdateRepositoryMapper } from "./mappers/course-update-repository.mapper";
import { CourseGetAllRepositoryMapper } from "./mappers/course-getAll-repository-mapper";
import { CourseGetByIdRepositoryMapper } from "./mappers/course-getById.-repository.mapper";
import { CourseDeleteRepositoryMapper } from "./mappers/course-delete-repository.mapper";

@Injectable({
  providedIn: "root",
})
export class CourseImplementationRepository extends CourseRepository {
  private url = "http://localhost:8080/courses/";

  constructor(private http: HttpClient) {
    super();
  }

  // Mappers
  private courseGetAllMapper = new CourseGetAllRepositoryMapper();
  private courseCreateMapper = new CourseCreateRepositoryMapper();
  private courseGetByIdMapper = new CourseGetByIdRepositoryMapper();
  private courseUpdateMapper = new CourseUpdateRepositoryMapper();
  private courseDeleteMapper = new CourseDeleteRepositoryMapper();

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<ResponseCourses>(this.url).pipe(
      map(response => this.courseGetAllMapper.mapFrom(response))
    );
  }

  getCourseById(id: number): Observable<CourseModel> {
    return this.http.get<Course>(`${this.url}${id}`).pipe(
      map(response => this.courseGetByIdMapper.mapFrom(response))
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`).pipe(
      map(response => {
        return;
      })
    );
  }

  updateCourse(id: number, course: CourseModel): Observable<CourseModel> {
    const courseMapped = this.courseUpdateMapper.mapFrom(course); 

    return this.http.put<Course>(`${this.url}${id}`, courseMapped).pipe(
      map(response => {
       
        return this.courseUpdateMapper.mapTo(response); //  convertir de course a course model
      })
    );
  }

  createCourse(course: CourseModel): Observable<CourseModel> {
    const courseMapped = this.courseCreateMapper.mapFrom(course);
    return this.http.post<Course>(this.url, courseMapped).pipe(
      map(response => {
        return {
          id: response.id,
          name: response.name,
          duration: response.duration,
          availableSlots: response.available_slots,  
        };
      })
    );
  }
}
