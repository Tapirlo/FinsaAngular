import { Component, OnInit } from '@angular/core';

import { Studente } from './studente';
import { StudenteService } from './studente.service';

@Component({
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {
  pageTitle = 'Studenti';

  studenti:Studente[] = [];

  errorMessage:string;
  constructor(private studenteService: StudenteService) {

  }

  ngOnInit(): void {
    this.studenteService.getStudenti().subscribe(
      studenti => {
        this.studenti = studenti;
      },
      error => this.errorMessage = <any>error
    );
  }
}