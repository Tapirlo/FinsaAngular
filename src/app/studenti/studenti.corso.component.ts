import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente, StudentePunteggio, StudenteCorso } from './studente';
import { StudenteService } from './studente.service';
import { Subscription, from } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';

const MAX=100;

@Component({
    templateUrl: './studenti.corso.component.html',
    styleUrls: ['./studenti.corso.component.css']
  })
  export class StudentiCorsoComponent implements OnInit, OnDestroy  {

getArrayStudenti() : StudenteCorso[] {

    var array = this.iscrittiForm.get('iscritti').value; 

    var array2 : StudenteCorso[]= []; 
    for (let i = 0; i < array.length; i++) {
      var lostudente=array[i].studente;
      lostudente.punteggio=array[i].punteggio;
      array2.push(lostudente);    
      
    }
    return array2; 
    
}

  save() {
    this.studenteService.inserisciPunteggio(this.getArrayStudenti()).subscribe(
      studentiPU => {
        console.log(JSON.stringify(studentiPU));
        this.messaggio='Complimenti hai modificato il punteggio'
      },
      error =>{ this.errorMessage = <any>error ;
        this.messaggio='Ritenta sarai più fortunato';
      }
    );
    
  }

   validazionePunteggio(c: AbstractControl): ValidationErrors {
  if (c.value !== null && (!isNaN(c.value) && c.value < 0 || c.value > MAX)) {
    return { 'punteggioFuoriScala': true };
  };
}
    private messaggio: string = '';
    private massimo:number=MAX;
    pageTitle = 'StudentiCorso';
    private sub: Subscription;
    studentiP:StudentePunteggio[] = [];
    private iscrittiForm: FormGroup;
  
    errorMessage:string;
    constructor(private formBuilder: FormBuilder, private studenteService: StudenteService, private route: ActivatedRoute,
        private router: Router) {
    }
  
    caricaForm() {
      this.iscrittiForm = this.formBuilder.group({
        iscritti: this.buildIscritti()});

    }

    buildIscritti() : FormArray {
      var array= this.formBuilder.array([]);
      for (let i = 0; i < this.studentiP.length; i++) {
        array.push(this.formBuilder.group({
          studente: this.studentiP[i],
          punteggio: [ this.studentiP[i].punteggio, this.validazionePunteggio]
        }));
      }
      return array;       
        
      
    }

    getStudente(idcorso: string): void {
      this.studenteService.getStudentiIscrittiCorso(idcorso).subscribe(
        studentiPU => {
          this.studentiP = studentiPU;
          this.caricaForm();
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