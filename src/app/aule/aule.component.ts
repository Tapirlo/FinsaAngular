import { Component, OnInit } from '@angular/core';
import {AuleService} from './aule.service';
import {Aula } from './aula';
import {CorsoService} from '../corsi/corso.service';
import { Corso } from '../corsi/corso';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';

@Component({
  templateUrl: './aule.component.html',
  styleUrls: ['./aule.component.css']
})
export class AuleComponent implements OnInit {
  private pageTitle = 'Aule';
  private prenota: boolean[]; 
  private aule: Aula[] = [];
  private corsi: Corso[] = [];
  private formGroups: FormGroup[];
  private errorMessage:string;
  constructor(private fb: FormBuilder, private aulaService:AuleService,private corsoService: CorsoService) {
   

  }

  creaPrenota() {
    this.prenota = [];
    for (let i = 0; i < this.aule.length; i++) {
      this.prenota[i]=false;
    }
  }

  generaForm() {
    this.formGroups = [];
    for (let i = 0; i < this.aule.length; i++) {
      this.formGroups[i]= this.fb.group({
        aula: this.aule[i].nomeAula,
        data: ['', [Validators.required]],        
        corso: ['', [Validators.required]]  
      });
      
    }
    
  }

  save(i: number) {

    this.aulaService.prenotaAula(this.formGroups[i].value).subscribe(
      aula=> {
        alert("aula "+aula.aula+"  prenotata per il corso "+aula.corso+" il "+aula.data);
      },
      error => {
        this.errorMessage = error;
        alert("ritenta sarai piu fortunato");
      });
  }

  ngOnInit(): void {
    this.aulaService.getAule().subscribe(
        aule => {
          this.aule = aule;

          this.corsoService.getCorsi().subscribe(
            corsi=> {
              this.corsi = corsi; 
              this.generaForm();
              this.creaPrenota();
            },
            error => {
              this.errorMessage = error;
            }
    
          )


        },
        error => this.errorMessage = <any>error
      );

      
  }
}
