export class Studente{
    codiceFiscale: string;
    nome:string;
    cognome:string;
    dataNascita:string;
    sesso: string;
    constructor(){
      this.codiceFiscale='';
      this.nome='';
      this.cognome='';
      this.dataNascita='';
      this.sesso='';
    }
    
  }

  export class StudentePunteggio extends Studente {
    static PUNTEGGIOMAX=100;
    punteggio: number;
  }