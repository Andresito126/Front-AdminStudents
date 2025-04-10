import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CourseModel } from "../../models/courses/course.model";
import { CourseRepository } from "../../repositories/courses/course.repository";

export class GetAllCoursesUseCase implements UseCase<CourseModel,CourseModel> {
    constructor(private courseRepo: CourseRepository) {}

    execute(course: CourseModel): Observable<CourseModel> {
        return this.courseRepo.createCourse(course);
    }

}