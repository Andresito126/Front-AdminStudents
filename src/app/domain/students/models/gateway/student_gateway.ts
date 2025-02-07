// para definir una interfaz "padre" para las clases que heredan de ella o sea el contrato.
// una interfaz no puede tener metodos implementados y una clase abstracta si 

import { Observable } from 'rxjs';
import { Student } from '../student';

export abstract class StudentGateway {
    abstract getByID(id: String): Observable<Student>;
    abstract getAll(): Observable<Student[]>;
    abstract save (_stu :Student) : Observable<Student /*void*/ >;
    abstract delete(id: number) : Observable<Student /*void*/ >;
    abstract update(id: number, _stu: Student ): Observable<Student /*void*/ >
} 
