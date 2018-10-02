import { Component, OnInit } from '@angular/core';

import { Corso } from './corso';
import { CorsoService } from './corso.service';

@Component({
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent implements OnInit {
  pageTitle = 'Corsi';

  corsi: Corso[] = [];
  errorMessage:string;
  constructor(private corsoService: CorsoService) {

  }

  ngOnInit(): void {
    this.corsoService.getCorsi().subscribe(
      corsi => {
        this.corsi = corsi;
      },
      error => this.errorMessage = <any>error
    );
  }
}
