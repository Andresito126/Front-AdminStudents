import { Student } from "../../../domain/students/models/student";
import { StudentListDTO } from "./studentList.dto";

export class StudentMapper {
  static fromDTO(dto: StudentListDTO): Student[] {

    
    return dto.students.map(
      (item) =>
        new Student(
          item.id,
          item.name,
          item.email,
          item.career,
          item.matricula
        )
    );
  }
}
