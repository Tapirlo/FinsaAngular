import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Corso } from './corso';

export class CorsoData implements InMemoryDbService {

  createDb() {
    const corsi: Corso[] = [
      {
        'idCorso': 'corso1',
        'nome': 'Corso per capre',
        'dataInizio': '2018-01-01',
        'dataFine': '2018-06-01',
        'argomenti':['c#','proctologia']
      },
      {
        'idCorso': 'corso2',
        'nome': 'Corso per ornitorinchi',
        'dataInizio': '2018-02-01',
        'dataFine': '2018-07-01',
        'argomenti':['taglio e cucito','proctologia']

      },
      {
        'idCorso': 'corso3',
        'nome': 'Corso per coccodrilli',
        'dataInizio': '2018-02-01',
        'dataFine': '2018-09-01',
        'argomenti':['antani','supercazzole']
      },
      {
        'idCorso': 'corso4',
        'nome': 'C# per cretini',
        'dataInizio': '2018-07-01',
        'dataFine': '2018-10-01',
        'argomenti':['tarapia tapioco','esorcismo']

      }

    ];
    return { corsi };
  }
}
