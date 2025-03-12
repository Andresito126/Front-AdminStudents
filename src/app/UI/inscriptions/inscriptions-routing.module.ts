import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscriptions/inscriptions.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';

const routes: Routes = [
  { path: '', component: InscriptionComponent }, 
  { path: 'new', component: InscriptionFormComponent }, 
  { path: 'edit/:id', component: InscriptionFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionsRoutingModule {}