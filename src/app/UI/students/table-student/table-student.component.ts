import { Component, OnInit } from '@angular/core';
import { GetStudentUseCase } from '../../../domain/students/usecases/getAllStudent_useCase';
import { Student } from '../../../domain/students/models/student';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.css'
})
export class TableStudentComponent implements OnInit {

  students: Student[] = [];
  

  constructor(private _getAllStudents : GetStudentUseCase){

  }

  ngOnInit(): void {
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

}
