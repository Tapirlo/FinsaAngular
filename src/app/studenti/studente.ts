export class Studente{
    codiceFiscale: string;
    nome:string;
    cognome:string;
    dataNascita:string;
    email: string;
    sesso: string;

    constructor(){
      this.codiceFiscale='';
      this.nome='';
      this.cognome='';
      this.dataNascita='';
      this.email= '';
      this.sesso='';
    }
    
  }

  export class StudentePunteggio extends Studente {
    static PUNTEGGIOMAX=100;
    punteggio: number;
    corso:string;
  }
  export class StudenteCorso extends Studente {
    corso: string;
    constructor(){
      super(); 
      this.corso= '';
    }
  }