export class Studente{
    codiceFiscale: string;
    nome:string;
    cognome:string;
    dataNascita:string;
    sesso: string;
    
  }

  export class StudentePunteggio extends Studente {
    static PUNTEGGIOMAX=100;
    punteggio: number;
  }