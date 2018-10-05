import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Docente } from './docente';
import { DocenteService} from './docente.service';



@Component({
  templateUrl: './docente.form.component.html',
  styleUrls: ['./docente.form.component.css']
})

export class DocenteFormComponent implements OnInit  {
    private docente : Docente; 
    
    private result : string;

    constructor(private docenteService: DocenteService) { 
      this.docente = new Docente();
      this._insegnamenti=''; 
      this.result='';
    }
    private errorMessage:string;  

    private _insegnamenti:string;

    get insegnamenti(){
      return this._insegnamenti;
    }    

    set insegnamenti(value:string){
        
        this.docente.insegnamenti=[];
      var stringhe=value.split(" ");
      for(let i=0;i<stringhe.length;i++){
          this.docente.insegnamenti.push(stringhe[i])
      }
      this._insegnamenti=value;
    }
  
    
    ngOnInit() {
      
    }
  
    save(docenteForm: NgForm) {
     
      console.log('Saved: ' + JSON.stringify(this.docente));
      this.docenteService.inserisciDocenti(this.docente)
      .subscribe(
        () =>{console.log('Saved: ' + JSON.stringify(this.docente));
        this.result='Docente iscritto!'; }
        ,
        (error: any) => this.result ="Errore studente non aggiunto"
      );
      this.docente = new Docente();
      docenteForm.reset();
    }
  }

