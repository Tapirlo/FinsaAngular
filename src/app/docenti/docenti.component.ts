import { Component, OnInit } from '@angular/core';

import { Docente } from './docente';
import { DocenteService } from './docente.service';

@Component({
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {
  pageTitle = 'Docenti';

  docenti: Docente[] = [];
  errorMessage:string;
  constructor(private docenteService: DocenteService) {

  }

  ngOnInit(): void {
    this.docenteService.getDocenti().subscribe(
      docenti => {
        this.docenti = docenti;
      },
      error => this.errorMessage = <any>error
    );
  }
}