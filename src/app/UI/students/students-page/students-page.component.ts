import { Component, OnInit } from '@angular/core';
import { GetStudentUseCase } from '../../../domain/students/usecases/getAllStudent_useCase';
import { SaveStudentUseCase } from '../../../domain/students/usecases/saveStudent_useCase';
import { Student } from '../../../domain/students/models/student';


@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.css'
})
export class StudentsPageComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private _getAllStudents: GetStudentUseCase,
    private _saveStudent: SaveStudentUseCase
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
}
