import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from './docente';
import { DocenteService } from './docente.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './docente.detail.component.html',
  styleUrls: ['./docente.detail.component.css']
})
export class DocenteDetailComponent implements OnInit,OnDestroy {
  pageTitle = 'Docente';
  private sub: Subscription;

  docente:Docente;
  errorMessage:string;
  constructor(private docenteService: DocenteService,private route: ActivatedRoute,
    private router: Router,) {

  }

  getDocente(iddocente:string){
    this.docenteService.getDocente(iddocente).subscribe(
        docente => {
          this.docente = docente;
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
        params => {
          const id = params['iddocente'];
          this.getDocente(id);
        });
  }
  ngOnDestroy():void{
      this.sub.unsubscribe();
  }
}
