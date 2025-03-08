// src/app/domain/courses/mappers/course.mapper.ts
import { Course } from '../models/course';
import { CourseListDTO } from './courseList.dto';

export class CourseMapper {
  static fromDTO(dto: CourseListDTO): Course[] {
    return dto.courses.map(
      (item) =>
        ({
          id: item.id,
          name: item.name,
          duration: item.duration,
          available_slots: item.available_slots,
        } as Course)
    );
  }
}