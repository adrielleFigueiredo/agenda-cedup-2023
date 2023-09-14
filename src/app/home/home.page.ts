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
    this.compromissos = this.localstorage_service.get("compromisso");
  }
excluir(indice:number){
this.compromissos.splice(indice,1);

} 
}
