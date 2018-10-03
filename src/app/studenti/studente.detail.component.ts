import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente } from './studente';
import { StudenteService } from './studente.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './studente.detail.component.html',
  styleUrls: ['./studente.detail.component.css']
})
export class StudenteDetailComponent implements OnInit,OnDestroy {
  pageTitle = 'Studente';
  private sub: Subscription;

  studente:Studente;
  errorMessage:string;
  constructor(private studenteService: StudenteService,private route: ActivatedRoute,
    private router: Router) {

  }

  getStudente(codiceFiscale:string){
    this.studenteService.getStudente(codiceFiscale).subscribe(
        studente => {
          this.studente = studente;
        },
        error => this.errorMessage = <any>error
      );
  }

  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
        params => {
          const codiceFiscale = params['codiceFiscale'];
          this.getStudente(codiceFiscale);
        });
  }
  ngOnDestroy():void{
      this.sub.unsubscribe();
  }
}
