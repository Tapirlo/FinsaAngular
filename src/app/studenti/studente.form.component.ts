import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studente } from './studente';
import { StudenteService} from './studente.service';


@Component({
    selector: 'app-studenteForm',
  templateUrl: './studente.form.component.html',
  styleUrls: ['./studente.form.component.css']
})

export class StudenteForm implements OnInit  {
    private studente : Studente; 

    constructor(private studenteService: StudenteService) { 
      this.studente= new Studente();
      this._argomenti='';  
  
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
    }
  
    save(studenteForm: NgForm) {
     
      console.log('Saved: ' + JSON.stringify(studenteForm.value));
      this.studenteService.inserisciStudente(this.studente)
      .subscribe(
        () =>console.log('Saved: ' + JSON.stringify(this.studente))
        ,
        (error: any) => this.errorMessage = <any>error
      );
  
    }
  }

