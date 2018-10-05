import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Docente } from './docente';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  //private corsoUrl = 'api/corsi';
  private docenteUrl='http://localhost:50397/api/docenti/GetAllDocenti';
  private docentesingoloUrl = 'http://localhost:50397/api/docenti/DocentePerID';
  
  private docentiFormUrl = 'http://localhost:50397/api/docenti/AggiungiDocente';

  constructor(private http: HttpClient) { }

  getDocenti(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.docenteUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
  getDocente(iddocente:string):Observable<Docente>{
    return this.http.get<Docente>(this.docentesingoloUrl+'?iddocente='+iddocente)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );

  }

  inserisciDocenti(docente: Docente):Observable<Docente>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Docente>(this.docentiFormUrl, docente, { headers: headers })
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
   }


}