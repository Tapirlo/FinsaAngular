import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Studente } from './studente';

@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  //private studentiUrl = 'api/studenti';
  private studenteUrl='http://localhost:50397/api/studenti/AllStudenti';
  constructor(private http: HttpClient) { }

  getStudenti(): Observable<Studente[]> {
    return this.http.get<Studente[]>(this.studenteUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }


}