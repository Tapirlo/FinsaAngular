import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocentiComponent } from './docenti.component';
import { fromEventPattern } from 'rxjs';
import { DocenteDetailComponent } from './docente.detail.component';

@NgModule({
  imports: [
    CommonModule,  RouterModule.forChild([
      { path: 'docenti', component: DocentiComponent },
      { path: 'docente/:iddocente', component: DocenteDetailComponent },
    ])
  ],
  declarations: [DocentiComponent,DocenteDetailComponent]
})
export class DocentiModule { }
