import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from '../models/inscription';
import { InscriptionGateway } from '../models/gateway/inscription_gateway';

@Injectable()
export class CreateInscriptionUseCase {
  constructor(private _inscriptionGateway: InscriptionGateway) {}

  execute(student_id: number, course_id: number, status: string): Observable<Inscription> {
    return this._inscriptionGateway.createInscription(student_id, course_id, status);
  }
}