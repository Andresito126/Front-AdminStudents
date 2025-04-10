import { Mapper } from "../../../../base/mapper";
import { CourseModel } from "../../../../domain/models/courses/course.model";
import { Course } from "../entities/course-entity";

export class CourseUpdateRepositoryMapper extends Mapper<CourseModel, Course> {
  mapFrom(courseModel: CourseModel): Course {
    return {
      id: courseModel.id,
      name: courseModel.name,
      duration: courseModel.duration,
      available_slots: courseModel.availableSlots,  
    };
  }

  mapTo(course: Course): CourseModel {
    return {
      id: course.id,
      name: course.name,
      duration: course.duration,
      availableSlots: course.available_slots,  
    };
  }
}
