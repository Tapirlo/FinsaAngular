import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';
import { Studente,StudenteCorso } from './studente';
import { StudenteService} from './studente.service';
import { CorsoService } from '../corsi/corso.service';
import { Corso } from '../corsi/corso';

function validazioneData(c: AbstractControl): ValidationErrors {
  var compleanno=new Date(c.value);
  var data2=new Date();
  
  if (compleanno>new Date(data2.getFullYear()-18,data2.getMonth(),data2.getDate()))
  {
    return { 'minorenne': true };
  } 
  return null;
}

@Component({
    selector: 'app-studenteForm',
  templateUrl: './studente.form.component.html',
  styleUrls: ['./studente.form.component.css']
})

export class StudenteForm implements OnInit  {
    private studenteForm: FormGroup;
     
    private corsi : Corso[];
    private result : string;

    constructor(private fb: FormBuilder, private studenteService: StudenteService, private corsoService : CorsoService) { 
      
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
          this.studenteForm = this.fb.group({
            nome: ['', [Validators.required, Validators.maxLength(25) ]],
            cognome: ['', [Validators.required, Validators.maxLength(25)]],
            dataNascita: ['', [Validators.required,validazioneData]],
            codiceFiscale: ['', [Validators.required, Validators.maxLength(25)]],
            email: ['', [Validators.required, Validators.email]],            
            sesso: ['', [Validators.required]],
            corso: ['', [Validators.required]],            
            iscrizioneCorso: false            
          });
        },
        error => console.log(error)
      );
      
    }
  
    save() {
     
      console.log('Saved: ' + JSON.stringify(this.studenteForm.value));
      this.studenteService.inserisciStudente(this.studenteForm.value)
      .subscribe(
        () =>{console.log('Saved: ' + JSON.stringify(this.studenteForm.value));
        this.result='Studente iscritto!'; }
        ,
        (error: any) => this.result ="Errore studente non aggiunto"
      );      
      this.studenteForm.reset();
    }
  }

