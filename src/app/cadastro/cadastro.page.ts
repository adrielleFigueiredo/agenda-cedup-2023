import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia:String = '';
  public descricao:String = '';
  public datahora:String = '';

  constructor() { }

  ngOnInit() {

  }
  salvar() {
    alert('A materia digitada foi' + this.materia);
  }

}
