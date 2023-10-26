import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public compromissos:Array<any>=[];
  
  constructor(
    public localstorage_service:LocalStorageService
  ) {
 

  }
  ionViewWillEnter(){
    this.compromissos = this.localstorage_service.get("compromisso");



  }
excluir(indice:number){
this.compromissos.splice(indice,1);
this.localstorage_service.del('compromisso',indice);
}
getHora(data:string){
let hora=data.split("T")[1];
return hora;
}
getData(data:string){
let dt = data.split('T')[0];
let dia = dt.split('-')[2];
let mes = dt.split('-')[1];
let ano = dt.split('-')[0];
return dia +'/'+ mes +'/' + ano;
}
 
}
