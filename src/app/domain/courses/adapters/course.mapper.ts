import { Course } from "../models/course";
import { CourseListDTO } from './courseList.dto';

export class CourseMapper {
  static fromDTO(dto: CourseListDTO): Course[] {
    return dto.courses.map(
      (item) =>
        new Course(
          item.id,
          item.name,
          item.duration,
          item.availableSlots
        )
    );
  }
}