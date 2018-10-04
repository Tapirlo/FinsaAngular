import { Component, OnInit } from '@angular/core';
import {AuleService} from './aule.service';
import {NgForm} from '@angular/forms';
import {Aula } from './aula';


@Component({
  selector:'app-aulaimport',
  templateUrl: './aule.component.html',
  styleUrls: ['./aule.component.css']
})
export class AuleComponent implements OnInit {
  pageTitle = 'Aule';

  aula:Aula;
  errorMessage:string;
  constructor(private aulaService:AuleService) {
      this.aula=new Aula();
  }

  ngOnInit(): void {
   
  }
 
   
  
  
  
  
    save() {
     
     this.aulaService.inserisciAula(this.aula).subscribe(
       ()=>console.log(JSON.stringify(this.aula)),
       error=>console.log(error)
     );
    
  }
  
}
