import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Corso } from './corso';

@Injectable({
  providedIn: 'root',
})
export class CorsoService {
  //private corsoUrl = 'api/corsi';
  private corsoUrl='http://localhost:50397/api/corsi/AllCorsi';
  constructor(private http: HttpClient) { }

  getCorsi(): Observable<Corso[]> {
    return this.http.get<Corso[]>(this.corsoUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }



}
