import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Studente, StudentePunteggio, StudenteCorso} from './studente';
import { StudenteForm } from './studente.form.component';

@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  //private studentiUrl = 'api/studenti';
  private studenteUrl='http://localhost:50397/api/studenti/AllStudenti';
  private studenteSingoloUrl='http://localhost:50397/api/studenti/StudentePerCF';
  private studentiCorsoUrl='http://localhost:50397/api/studenti/StudentiIscritti';
  private studentiFormUrl='http://localhost:50397/api/studenti/AggiungiStudente';
  private studentiPunteggioUrl='http://localhost:50397/api/studenti/InserisciPunteggio';

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
      tap(data => {
        for(let studente of data)
        {
          studente.corso=idcorso;
        }
        console.log(JSON.stringify(data));}));
  }

  inserisciStudente(studente: Studente):Observable<Studente>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Studente>(this.studentiFormUrl, studente, { headers: headers })
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
   }

   inserisciPunteggio(studenti: StudenteCorso[]):Observable<StudenteCorso[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    alert("studenti:"+JSON.stringify(studenti));
    return this.http.put<StudenteCorso[]>(this.studentiPunteggioUrl, studenti, { headers: headers })
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
   }
}