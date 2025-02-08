import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class StudentsPageComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  studentToEdit: Student | null = null;
  pollingInterval: any; 

  //short 2
  pollingInterval2: any; 
  totalStudents: number = 0;  

  constructor(
    private _getAllStudents: GetStudentUseCase,
    private _saveStudent: SaveStudentUseCase,
    private _deleteStudent: DeleteStudentUseCase,
    private _updateStudent: UpdateStudentUseCase
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.startPolling();
    this.startPolling2(); 
  }

  // para que pare  el polling cuando el componente se destruye
  ngOnDestroy(): void {
    this.stopPolling(); 
    this.stopPolling2();
  }

  //para el getAll
  loadStudents() {
    this._getAllStudents.getAllStudent().subscribe(
      (students) => {
        console.log('Students:', students);
        this.students = students;
        this.totalStudents = students.length;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  //se ejecuta cada 5 segindos
  startPolling() {
    this.pollingInterval = setInterval(() => {
      this.loadStudents();
    }, 5000); 
  }

  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }


  //short 2
  startPolling2() {
    this.pollingInterval2 = setInterval(() => {
      this.totalStudents = this.students.length;  
    }, 5000);  
  }

  stopPolling2() {
    if (this.pollingInterval2) {
      clearInterval(this.pollingInterval2);
    }
  }

  handleSaveStudent(student: Student) {
    this._saveStudent.saveStudent(student).subscribe(
      (savedStudent) => {
        console.log('Estudiante guardado:', savedStudent);
        this.students.push(savedStudent); 

        //actualizador contador
        this.totalStudents = this.students.length; 
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
        this.totalStudents = this.students.length;
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
