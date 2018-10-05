import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocentiComponent } from './docenti.component';
import { fromEventPattern } from 'rxjs';
import { DocenteDetailComponent } from './docente.detail.component';
import { DocenteFormComponent } from './docente.form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,  RouterModule.forChild([
      { path: 'docenti', component: DocentiComponent },
      { path: 'docente/:iddocente', component: DocenteDetailComponent },
      { path: 'docenteForm', component: DocenteFormComponent },
    ])
  ],
  declarations: [DocentiComponent,DocenteDetailComponent, DocenteFormComponent]
})
export class DocentiModule { }
