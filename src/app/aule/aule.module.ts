import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {AuleComponent} from './aule.component';
import { AulaDetailComponent } from './aula.detail.component';

@NgModule({
  imports: [
    CommonModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'aule', component: AuleComponent },
      { path: 'aule/:idaula', component: AulaDetailComponent },

    ])
  ],
  declarations: [
    AuleComponent,AulaDetailComponent
  ]
})
export class AuleModule { }
