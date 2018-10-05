import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Studente } from './studente';

export class StudenteData implements InMemoryDbService {

  createDb() {
    const studenti: Studente[] = [
      {'codiceFiscale': 'aaaa',
        'nome': 'Luke',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio',
        'email': 'aaa@a',         
      },
      {
        'codiceFiscale': 'bbbb',
        'nome': 'Anakin',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio',
        'email': 'aaa@a',  
      },
      {
        'codiceFiscale': 'cccc',
        'nome': 'Leyla',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'femmina',
        'email': 'aaa@a',  
      },
      {
        'codiceFiscale': 'dddd',
        'nome': 'b2',
        'cognome': '3p8',
        'dataNascita': '1999-06-01',
        'sesso': 'altro',
        'email': 'aaa@a',  
      },
      {
        'codiceFiscale': 'eee',
        'nome': 'Darth',
        'cognome': 'Vader',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio',
        'email': 'aaa@a',  
      }

    ];
    return { studenti };
  }
}