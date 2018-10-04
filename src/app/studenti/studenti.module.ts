import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { StudenteData } from './studente';
import {StudentiComponent} from './studenti.component';
import { StudenteDetailComponent } from './studente.detail.component';
import {StudentiCorsoComponent} from './studenti.corso.component';
import { StarModule } from '../shared/star.module';
import { FormsModule } from '@angular/forms';
import { StudenteForm } from './studente.form.component';

@NgModule({
  imports: [
    CommonModule,
    StarModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(StudentiData),
    RouterModule.forChild([
      { path: 'inserisciStudente', component: StudenteForm },
      { path: 'studenti', component: StudentiComponent },
      { path: 'studenti/:codiceFiscale', component: StudenteDetailComponent },
      { path: 'studentiCorso/:idcorso', component: StudentiCorsoComponent },
    ])
  ],
  declarations: [
    StudentiComponent,
    StudenteDetailComponent,
    StudentiCorsoComponent,
    StudenteForm
  ]
})
export class StudentiModule { }
