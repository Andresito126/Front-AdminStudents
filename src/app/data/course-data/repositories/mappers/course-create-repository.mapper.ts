import { Mapper } from "../../../../base/mapper";
import { CourseModel } from "../../../../domain/models/courses/course.model";
import { Course } from "../entities/course-entity";

export class CourseCreateRepositoryMapper extends Mapper<CourseModel, Course> {
  mapFrom(courseModel: CourseModel): Course {
    return {
      id: courseModel.id,
      name: courseModel.name,
      duration: courseModel.duration,
      available_slots: courseModel.availableSlots,
    };
  }


}
