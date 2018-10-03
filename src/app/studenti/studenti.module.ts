import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { StudenteData } from './studente';
import {StudentiComponent} from './studenti.component';
import { StudenteDetailComponent } from './studente.detail.component';

@NgModule({
  imports: [
    CommonModule,
    //InMemoryWebApiModule.forRoot(StudentiData),
    RouterModule.forChild([
      { path: 'studenti', component: StudentiComponent },
      { path: 'studenti/:codiceFiscale', component: StudenteDetailComponent },
    ])
  ],
  declarations: [
    StudentiComponent,
    StudenteDetailComponent
  ]
})
export class StudentiModule { }
