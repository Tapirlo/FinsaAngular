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

  cancella(studente: Studente) {
    if (confirm('Sei sicuro di quello che stai facendo?')) {
      this.studenteService.cancella(studente.codiceFiscale).subscribe(
        data => {
          alert(data);
          this.studenti.splice(this.studenti.indexOf(studente),1);
        },
        error => {this.errorMessage = <any>error
        alert("ritenta sarai piu fortunato");}
      );
    }
    
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