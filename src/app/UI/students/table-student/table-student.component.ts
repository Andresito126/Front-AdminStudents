import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../domain/students/models/student';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.css'
})
export class TableStudentComponent {

  @Input() students: Student[] = [];

  @Output() deleteStudent = new EventEmitter<number>();
  @Output() editStudentEvent = new EventEmitter<Student>(); 


  onDelete(studentID: number): void {
    console.log("owo")
    this.deleteStudent.emit(studentID);
  }
  
  onEdit(student: Student): void {
    this.editStudentEvent.emit(student); 
  }
  

}
