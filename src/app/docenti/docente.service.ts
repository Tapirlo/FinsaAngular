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
  constructor(private http: HttpClient) { }

  getDocenti(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.docenteUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }



}