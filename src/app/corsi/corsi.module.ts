import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CorsoData } from './corso.data';
import {CorsiComponent} from './corsi.component';
import {CorsoDetailComponent} from './corso.detail.component';
import {InsertCorsoComponent} from './insert.corso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'corsi', component: CorsiComponent },
      { path: 'corsi/:idcorso', component: CorsoDetailComponent },
      { path: 'inserisciCorso', component: InsertCorsoComponent },

    ])
  ],
  declarations: [
    CorsiComponent,
    CorsoDetailComponent,
    InsertCorsoComponent
  ]
})
export class CorsiModule { }
