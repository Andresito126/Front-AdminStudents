import { Observable } from "rxjs";
import { CourseModel } from "../../models/courses/course.model";

export abstract class CourseRepository {
    abstract getAllCourses(): Observable<CourseModel[]>;
    abstract getCourseById(id: number): Observable<CourseModel>;
    abstract createCourse(course: CourseModel): Observable<CourseModel>;
    // // abstract updateCourse(course: CourseModel): Observable<CourseModel>;
    abstract updateCourse(id:number, course:CourseModel): Observable<CourseModel>;
    abstract deleteCourse(id: number): Observable<void>;
    
}