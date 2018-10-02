import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {AuleComponent} from './aule.component';

@NgModule({
  imports: [
    CommonModule,
    //InMemoryWebApiModule.forRoot(CorsoData),
    RouterModule.forChild([
      { path: 'aule', component: AuleComponent }
    ])
  ],
  declarations: [
    AuleComponent
  ]
})
export class AuleModule { }
