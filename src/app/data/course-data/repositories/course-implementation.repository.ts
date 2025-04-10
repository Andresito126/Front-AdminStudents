import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseRepository } from "../../../domain/repositories/courses/course.repository";
import { CourseModel } from "../../../domain/models/courses/course.model";
import { Observable, map } from "rxjs";
import { ResponseCourses } from "./entities/course-entity";
import { CourseGetAllRepositoryMapper } from "./mappers/course-getAll-repository-mapper";

@Injectable({
  providedIn: "root",
})

export class CourseImplementationRepository extends CourseRepository {
  constructor(private http: HttpClient) {
    super();
  }

  private url = "http://localhost:8080/courses/";

  courseGetAllMapper = new CourseGetAllRepositoryMapper();

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<ResponseCourses>(this.url).pipe(
      map(response => this.courseGetAllMapper.mapFrom(response))
    );
  }


}
