import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CourseModel } from "../../models/courses/course.model";
import { CourseRepository } from "../../repositories/courses/course.repository";

export class GetByIdCourseUseCase implements UseCase<number,CourseModel> {
    constructor(private courseRepo: CourseRepository) {}

    execute(id: number): Observable<CourseModel> {
        return this.courseRepo.getCourseById(id)
    }

}