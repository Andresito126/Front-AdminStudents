import { Mapper } from "../../../../base/mapper";
import { CourseModel } from "../../../../domain/models/courses/course.model";
import { Course } from "../entities/course-entity";

export class CourseGetByIdRepositoryMapper extends Mapper<Course, CourseModel> {
  mapFrom(course: Course): CourseModel {
    return {
      id: course.id,
      name: course.name,
      duration: course.duration,
      availableSlots: course.available_slots, 
    };
  }
}
