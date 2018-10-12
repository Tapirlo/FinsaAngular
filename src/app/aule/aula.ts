export class Aula{
   
    nomeAula:string;
    numeroPosti:number;
    numeroComputer:number;
    superficie:number;
    
    constructor(){
        this.nomeAula="";
        this.numeroPosti=0;
        this.numeroComputer=0;
        this.superficie=0;
    }
}

export class AulaPrenotazioni extends Aula {
    prenotazioni: any[];

    constructor(){
        super();
        this.prenotazioni=[];
    }
}