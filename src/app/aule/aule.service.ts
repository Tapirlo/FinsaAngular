import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Aula, AulaPrenotazioni } from './aula';

@Injectable({
  providedIn: 'root',
})
export class AuleService {
  //private aulaUrl = 'api/aule';
  private aulaUrl='http://localhost:50397/api/aule/AllAule';
  private aulasingolaUrl='http://localhost:50397/api/aule/AulaPerID';
  private  inserisciaulaURL='http://localhost:50397/api/aule/InserisciAula';
  private  prenotaAulaURL='http://localhost:50397/api/aule/RegistraAula';

  constructor(private http: HttpClient) { }

  getAule(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.aulaUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
 getAula(idaula:string): Observable<AulaPrenotazioni>{
   return this.http.get<AulaPrenotazioni>(this.aulasingolaUrl+'?idAula='+idaula)
   .pipe(
     tap(data => console.log(JSON.stringify(data)))
   );
 }

 inserisciAula(aula:Aula): Observable<Aula>{
   var aulaheaders= new HttpHeaders({'Content-Type':'application/json'});
   return this.http.post<Aula>(this.inserisciaulaURL,aula,{headers:aulaheaders});
 }

 prenotaAula(aula): Observable<any>{
  var aulaheaders= new HttpHeaders({'Content-Type':'application/json'});
  return this.http.post<any>(this.prenotaAulaURL,aula,{headers:aulaheaders});
}


}
