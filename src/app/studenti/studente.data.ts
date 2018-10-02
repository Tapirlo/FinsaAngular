import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Studente } from './studente';

export class StudenteData implements InMemoryDbService {

  createDb() {
    const studenti: Studente[] = [
      {'codiceFiscale': 'aaaa',
        'nome': 'Luke',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio'
      },
      {
        'codiceFiscale': 'bbbb',
        'nome': 'Anakin',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio'
      },
      {
        'codiceFiscale': 'cccc',
        'nome': 'Leyla',
        'cognome': 'Skywalker',
        'dataNascita': '1999-06-01',
        'sesso': 'femmina'
      },
      {
        'codiceFiscale': 'dddd',
        'nome': 'b2',
        'cognome': '3p8',
        'dataNascita': '1999-06-01',
        'sesso': 'altro'
      },
      {
        'codiceFiscale': 'eee',
        'nome': 'Darth',
        'cognome': 'Vader',
        'dataNascita': '1999-06-01',
        'sesso': 'maschio'
      }

    ];
    return { studenti };
  }
}