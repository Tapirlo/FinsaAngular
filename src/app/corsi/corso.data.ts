import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Corso } from './corso';

export class CorsoData implements InMemoryDbService {

  createDb() {
    const corsi: Corso[] = [
      {
        'idcorso': 'corso1',
        'nome': 'Corso per capre',
        'datainizio': '2018-01-01',
        'datafine': '2018-06-01'
      },
      {
        'idcorso': 'corso2',
        'nome': 'Corso per ornitorinchi',
        'datainizio': '2018-02-01',
        'datafine': '2018-07-01'
      },
      {
        'idcorso': 'corso3',
        'nome': 'Corso per coccodrilli',
        'datainizio': '2018-02-01',
        'datafine': '2018-09-01'
      },
      {
        'idcorso': 'corso4',
        'nome': 'C# per cretini',
        'datainizio': '2018-07-01',
        'datafine': '2018-10-01'
      }

    ];
    return { corsi };
  }
}
