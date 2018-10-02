import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocentiComponent } from './docenti.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,  RouterModule.forChild([
      { path: 'docenti', component: DocentiComponent }
    ])
  ],
  declarations: [DocentiComponent]
})
export class DocentiModule { }
