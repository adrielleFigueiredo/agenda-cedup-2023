import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public dados$:Array<any> =[];
  constructor() { }

post(entidade:string,dados:any){
  this.dados$ = this.get(entidade);
  this.dados$.push(dados);
    localStorage.setItem(entidade,JSON.stringify(this.dados$));

  }
  get(entidade:string){
  let _dados =JSON.parse(String(localStorage.getItem(entidade)));
  return(_dados == null) ? [] :_dados;

  }
  del(entidade:string,indice:number){
    this.dados$.splice(indice,1);
localStorage.setItem(entidade,JSON.stringify(this.dados$));


  }
}
