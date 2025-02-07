import { Component, OnInit } from '@angular/core';
import { GetStudentUseCase } from '../../../domain/students/usecases/getAllStudent_useCase';
import { SaveStudentUseCase } from '../../../domain/students/usecases/saveStudent_useCase';
import { Student } from '../../../domain/students/models/student';
import { DeleteStudentUseCase } from '../../../domain/students/usecases/deleteStudent_useCase';
import { UpdateStudentUseCase } from '../../../domain/students/usecases/updateStudent_useCase';


@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.css'
})
export class StudentsPageComponent implements OnInit {
  students: Student[] = [];
  studentToEdit: Student | null = null; 


  constructor(
    private _getAllStudents: GetStudentUseCase,
    private _saveStudent: SaveStudentUseCase,
    private _deleteStudent: DeleteStudentUseCase,
    private _updateStudent: UpdateStudentUseCase

    
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this._getAllStudents.getAllStudent().subscribe(
      (students) => {
        console.log('Students:', students);
        this.students = students;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  handleSaveStudent(student: Student) {
    this._saveStudent.saveStudent(student).subscribe(
      (savedStudent) => {
        console.log('Estudiante guardado:', savedStudent);
        this.students.push(savedStudent); 
      },
      (error) => {
        console.error('Error al guardar estudiante', error);
      }
    );
  }

  deleteStudent(studentID: number): void {
    this._deleteStudent.deleteStudent(studentID).subscribe(
      () => {
     
        this.students = this.students.filter(student => student.ID !== studentID);
      },
      (error) => {
        console.error('Error al eliminar estudiante:', error);
      }
    );
  }

  setStudentToEdit(student: Student): void {
    this.studentToEdit = { ...student }; 
  }

}
