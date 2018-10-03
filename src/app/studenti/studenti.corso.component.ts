import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente, StudentePunteggio } from './studente';
import { StudenteService } from './studente.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './studenti.corso.component.html',
    styleUrls: ['./studenti.corso.component.css']
  })

  export class StudentiCorsoComponent implements OnInit, OnDestroy  {
    pageTitle = 'StudentiCorso';
    private sub: Subscription;
    studentiP:StudentePunteggio[] = [];
  
    errorMessage:string;
    constructor(private studenteService: StudenteService, private route: ActivatedRoute,
        private router: Router) {
  
    }
  
    getStudente(idcorso: string): void {
      this.studenteService.getStudentiIscrittiCorso(idcorso).subscribe(
        studentiPU => {
          this.studentiP = studentiPU;
        },
        error => this.errorMessage = <any>error
      );
    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
              const idcorso = params['idcorso'];
              this.getStudente(idcorso);
            });
    }
    ngOnDestroy():void{
        this.sub.unsubscribe();
    }
  }