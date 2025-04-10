import { Mapper } from "../../../../base/mapper";
import { CourseModel } from "../../../../domain/models/courses/course.model";
import { ResponseCourses } from "../entities/course-entity";

export class CourseGetAllRepositoryMapper extends Mapper<ResponseCourses, CourseModel[]> {
  mapFrom(response: ResponseCourses): CourseModel[] {
    return response.courses.map(course => ({
      id: course.id,
      name: course.name,
      duration: course.duration,
      availableSlots: course.available_slots,
    }));
  }
}
