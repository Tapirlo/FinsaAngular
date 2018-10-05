export class Corso{
  idCorso:string;
  nome:string;
  dataInizio:string;
  dataFine:string;
  argomenti:string[];
  constructor(){
    this.idCorso='';
    this.nome='';
    this.dataInizio='';
    this.dataFine='';
    this.argomenti=[];
  }
}
