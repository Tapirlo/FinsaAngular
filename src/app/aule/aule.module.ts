import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {AuleComponent} from './aule.component';
import { AulaDetailComponent } from './aula.detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,
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
