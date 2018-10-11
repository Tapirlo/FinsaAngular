import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {AuleComponent} from './aule.component';
import { AulaDetailComponent } from './aula.detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InserisciAulaComponent } from './inserisci.aula.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'aule', component: AuleComponent },
      { path: 'aule/:idaula', component: AulaDetailComponent },
      {path:'inserisciAula',component:InserisciAulaComponent}

    ])
  ],
  declarations: [
    AuleComponent,AulaDetailComponent,InserisciAulaComponent
  ]
})
export class AuleModule { }
