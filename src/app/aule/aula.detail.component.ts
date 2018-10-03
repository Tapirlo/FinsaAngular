import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from './aula';
import { AuleService } from './aule.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './aula.detail.component.html',
  styleUrls: ['./aula.detail.component.css']
})
export class AulaDetailComponent implements OnInit,OnDestroy {
  pageTitle = 'Aula';
  private sub: Subscription;


  aula:Aula;
  errorMessage:string;
  constructor(private aulaService: AuleService,private route: ActivatedRoute,
    private router: Router,) {

  }

  getAula(nomeaula:string){
    this.aulaService.getAula(nomeaula).subscribe(
       aula => {
          this.aula = aula;
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
        params => {
          const id = params['idaula'];
          this.getAula(id);
        });
  }
  ngOnDestroy():void{
      this.sub.unsubscribe();
  }
}
