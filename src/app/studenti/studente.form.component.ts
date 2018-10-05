import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studente,StudenteCorso } from './studente';
import { StudenteService} from './studente.service';
import { CorsoService } from '../corsi/corso.service';
import { Corso } from '../corsi/corso';


@Component({
    selector: 'app-studenteForm',
  templateUrl: './studente.form.component.html',
  styleUrls: ['./studente.form.component.css']
})

export class StudenteForm implements OnInit  {
    private studente : StudenteCorso; 
    private corsi : Corso[];
    private result : string;

    constructor(private studenteService: StudenteService, private corsoService : CorsoService) { 
      this.studente= new StudenteCorso();
      this._argomenti=''; 
      this.result='';
    }
    private errorMessage:string;
    private _argomenti:string;

    get argomenti(){
        return this._argomenti;
    }

    set argomenti(value:string){
        
        this._argomenti=value;
    }
  
    
    ngOnInit() {
      this.corsoService.getCorsi().subscribe(
        corsi => {
          this.corsi = corsi;
        },
        error => console.log(error)
      );
    }
  
    save(studenteForm: NgForm) {
     
      console.log('Saved: ' + JSON.stringify(this.studente));
      this.studenteService.inserisciStudente(this.studente)
      .subscribe(
        () =>{console.log('Saved: ' + JSON.stringify(this.studente));
        this.result='Studente iscritto!'; }
        ,
        (error: any) => this.result = <any>error
      );
      this.studente = new StudenteCorso();
      studenteForm.reset();
    }
  }

