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
  private corsoSingoloUrl='http://localhost:50397/api/corsi/CorsoPerID';
  private insertCorsoUrl='http://localhost:50397/api/corsi/InserisciCorso';


  constructor(private http: HttpClient) { }

  getCorsi(): Observable<Corso[]> {
    return this.http.get<Corso[]>(this.corsoUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
  getCorso(idcorso:string):Observable<Corso>{
    return this.http.get<Corso>(this.corsoSingoloUrl+'?idcorso='+idcorso)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );

  }
  inserisciCorso(corso:Corso):Observable<Corso>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Corso>(this.insertCorsoUrl, corso, { headers: headers })
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );

  }

}
