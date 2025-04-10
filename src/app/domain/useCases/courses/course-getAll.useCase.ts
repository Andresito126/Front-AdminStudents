import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CourseModel } from "../../models/courses/course.model";
import { CourseRepository } from "../../repositories/courses/course.repository";

export class GetAllCourseUseCase implements UseCase<void,CourseModel[]> {
    constructor(private courseRepo: CourseRepository) {}

    execute(params: void): Observable<CourseModel[]> {
        return this.courseRepo.getAllCourses();
    }

}