import { Component, OnInit } from '@angular/core';
import {AuleService} from './aule.service';
import {Aula } from './aula';

@Component({
  templateUrl: './aule.component.html',
  styleUrls: ['./aule.component.css']
})
export class AuleComponent implements OnInit {
  pageTitle = 'Aule';

  aule: Aula[] = [];
  errorMessage:string;
  constructor(private aulaService:AuleService) {

  }

  ngOnInit(): void {
    this.aulaService.getAule().subscribe(
        aule => {
          this.aule = aule;
        },
        error => this.errorMessage = <any>error
      );
  }
}
