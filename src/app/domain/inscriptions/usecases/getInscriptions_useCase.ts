import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Inscription } from '../models/inscription';
import { InscriptionGateway } from '../models/gateway/inscription_gateway';

@Injectable({ providedIn: 'root' })
export class GetInscriptionsUseCase {
  constructor(private _inscriptionGateway: InscriptionGateway) {}

  execute(): Observable<Inscription[]> {
    return this._inscriptionGateway.getInscriptions().pipe(
      map((response: any) => response.inscriptions) 
    );
  }
}
