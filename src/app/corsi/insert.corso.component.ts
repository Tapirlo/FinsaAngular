import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Corso } from './corso';
import {CorsoService} from './corso.service';

@Component({
  templateUrl: './insert.corso.component.html',
  styleUrls: ['./insert.corso.component.css']
})
export class InsertCorsoComponent implements OnInit {
  private corso:Corso; 
  private risultato: string; 
  constructor(private corsoService: CorsoService) { 
    this.corso= new Corso();  
    this.risultato= '';      
    this._argomenti='';
  }
  private errorMessage:string;
  private _argomenti:string;

  get argomenti(){
      return this._argomenti;
  }

  set argomenti(value:string){
      this.corso.argomenti=[];
      var stringhe=value.split(",");
      for(let i=0;i<stringhe.length;i++){
          this.corso.argomenti.push(stringhe[i])
      }
      this._argomenti=value;
  }

  
  ngOnInit() {
  }

  save(form: NgForm) {
    
    console.log('Saved: ' + JSON.stringify(this.corso));
    this.corsoService.inserisciCorso(this.corso)
    .subscribe(
      () => {console.log('Saved: ' + JSON.stringify(this.corso));
      this.risultato='Complimenti hai inserito un corso';
      form.reset();
    }
      ,
      (error: any) => {this.errorMessage = <any>error;
        this.risultato="ritenta sarai piu fortunato";}
    );

  }
}
