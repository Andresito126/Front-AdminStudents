import { Injectable } from "@angular/core";
import { StudentGateway } from "../models/gateway/student_gateway";
import { Observable } from "rxjs";
import { Student } from "../models/student";



@Injectable({
    providedIn:"root"
})

export class DeleteStudentUseCase{

    constructor(private _studentGateway : StudentGateway){}

    deleteStudent(id: number): Observable<Student>{
        
        return this._studentGateway.delete(id)
    }
}