import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../../domain/students/models/student';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.css'
})
export class TableStudentComponent {

  @Input() students: Student[] = [];

  
}
