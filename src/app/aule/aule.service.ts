import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Aula } from './aula';

@Injectable({
  providedIn: 'root',
})
export class AuleService {
  //private aulaUrl = 'api/aule';
  private aulaUrl='http://localhost:50397/api/Aule/AllAule';
  private aulasingolaUrl='http://localhost:50397/api/Aule/AulaPerID';
  constructor(private http: HttpClient) { }

  getAule(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.aulaUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
 getAula(idaula:string): Observable<Aula>{
   return this.http.get<Aula>(this.aulasingolaUrl+'?idAula='+idaula)
   .pipe(
     tap(data => console.log(JSON.stringify(data)))
   );
 }


}
