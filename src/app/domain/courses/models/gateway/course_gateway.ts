// para definir una interfaz "padre" para las clases que heredan de ella o sea el contrato.
// una interfaz no puede tener metodos implementados y una clase abstracta si 


import { Observable } from 'rxjs';
import { Course } from '../course';

export abstract class CourseGateway {
  

  abstract save(course: Course): Observable<Course>;
  abstract findAll(): Observable<Course[]>;
  abstract update(id: number, course: Course): Observable<Course>;
  abstract delete(id: number): Observable<void>;
  abstract getByID(id: string): Observable<Course>; 
}
