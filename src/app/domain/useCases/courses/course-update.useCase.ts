import { Observable } from "rxjs";
import { UseCase, UC } from "../../../base/use-case";
import { CourseModel } from "../../models/courses/course.model";
import { CourseRepository } from "../../repositories/courses/course.repository";

export class UpdateCourseUseCase implements UC<number,CourseModel, CourseModel> {
    constructor(private courseRepo: CourseRepository){}

    execute(id: number, course: CourseModel): Observable<CourseModel> {
        return this.courseRepo.updateCourse(id, course)
    }
}