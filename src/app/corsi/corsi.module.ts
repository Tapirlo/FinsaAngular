import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CorsoData } from './corso.data';
import {CorsiComponent} from './corsi.component';
import {CorsoDetailComponent} from './corso.detail.component';

@NgModule({
  imports: [
    CommonModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'corsi', component: CorsiComponent },
      { path: 'corsi/:idcorso', component: CorsoDetailComponent },
    ])
  ],
  declarations: [
    CorsiComponent,
    CorsoDetailComponent
  ]
})
export class CorsiModule { }
