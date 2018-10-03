import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { StudenteData } from './studente';
import {StudentiComponent} from './studenti.component';
import { StudenteDetailComponent } from './studente.detail.component';
import {StudentiCorsoComponent} from './studenti.corso.component';
import { StarModule } from '../shared/star.module';

@NgModule({
  imports: [
    CommonModule,
    StarModule,
    //InMemoryWebApiModule.forRoot(StudentiData),
    RouterModule.forChild([
      { path: 'studenti', component: StudentiComponent },
      { path: 'studenti/:codiceFiscale', component: StudenteDetailComponent },
      { path: 'studentiCorso/:idcorso', component: StudentiCorsoComponent },
    ])
  ],
  declarations: [
    StudentiComponent,
    StudenteDetailComponent,
    StudentiCorsoComponent
  ]
})
export class StudentiModule { }
