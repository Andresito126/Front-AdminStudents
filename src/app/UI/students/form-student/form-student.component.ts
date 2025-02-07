import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../domain/students/models/student';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrl: './form-student.component.css'
})
export class FormStudentComponent {
  @Output() saveStudentEvent = new EventEmitter<Student>();

  student: Student = new Student(0, '', '', '', '');

  saveStudent() {
    if (
      !this.student.Name ||
      !this.student.Email ||
      !this.student.Career ||
      !this.student.Matricula
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.saveStudentEvent.emit(this.student);
    this.student = new Student(0, '', '', '', ''); 
  }
}
