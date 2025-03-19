import { Observable } from 'rxjs';
import { Inscription } from '../inscription';

export abstract class InscriptionGateway {
  abstract getInscriptions(): Observable<Inscription[]>;
  abstract createInscription(student_id: number, course_id: number, status: string): Observable<Inscription>;
}