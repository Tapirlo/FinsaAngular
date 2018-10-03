import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Studente, StudentePunteggio } from './studente';

@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  //private studentiUrl = 'api/studenti';
  private studenteUrl='http://localhost:50397/api/studenti/AllStudenti';
  private studenteSingoloUrl='http://localhost:50397/api/studenti/StudentePerCF';
  private studentiCorsoUrl='http://localhost:50397/api/studenti/StudentiIscritti';
  constructor(private http: HttpClient) { }

  getStudenti(): Observable<Studente[]> {
    return this.http.get<Studente[]>(this.studenteUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  getStudente(codiceFiscale:string):Observable<Studente>{
    return this.http.get<Studente>(this.studenteSingoloUrl+'?cf='+codiceFiscale)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );

  }

  getStudentiIscrittiCorso(idcorso: string): Observable<StudentePunteggio[]>{
    return this.http.get<StudentePunteggio[]>(this.studentiCorsoUrl+'?idcorso='+idcorso)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

}