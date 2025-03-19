import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscription } from '../../../domain/inscriptions/models/inscription';
import { InscriptionGateway } from '../../../domain/inscriptions/models/gateway/inscription_gateway';

@Injectable({
  providedIn: 'root',
})
export class InscriptionApiService implements InscriptionGateway {
  private _url = 'http://localhost:8080/inscriptions/'; 

  constructor(private _http: HttpClient) {}

  // get inscripcion
  getInscriptions(): Observable<Inscription[]> {
    return this._http.get<Inscription[]>(this._url);
  }

  // crear inscripcion
  createInscription(student_id: number, course_id: number, status: string): Observable<Inscription> {
    const body = { student_id, course_id, status };
    return this._http.post<Inscription>(this._url, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}