import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Corso } from './corso';
import { CorsoService } from './corso.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './corso.detail.component.html',
  styleUrls: ['./corso.detail.component.css']
})
export class CorsoDetailComponent implements OnInit,OnDestroy {
  pageTitle = 'Corso';
  private sub: Subscription;

  corso:Corso;
  errorMessage:string;
  constructor(private corsoService: CorsoService,private route: ActivatedRoute,
    private router: Router,) {

  }

  getCorso(idcorso:string){
    this.corsoService.getCorso(idcorso).subscribe(
        corso => {
          this.corso = corso;
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
        params => {
          const id = params['idcorso'];
          this.getCorso(id);
        });
  }
  ngOnDestroy():void{
      this.sub.unsubscribe();
  }
}
