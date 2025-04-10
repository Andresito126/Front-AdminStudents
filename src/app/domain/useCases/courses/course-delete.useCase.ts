import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CourseRepository } from "../../repositories/courses/course.repository";

export class DeleteCourseUseCase implements UseCase<number,void> {
    constructor(private CourseRepo: CourseRepository){}

    execute(id: number): Observable<void> {
        return this.CourseRepo.deleteCourse(id)
    }
}