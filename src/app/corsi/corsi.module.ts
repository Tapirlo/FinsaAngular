import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CorsoData } from './corso.data';
import {CorsiComponent} from './corsi.component';

@NgModule({
  imports: [
    CommonModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'corsi', component: CorsiComponent }
    ])
  ],
  declarations: [
    CorsiComponent
  ]
})
export class CorsiModule { }
