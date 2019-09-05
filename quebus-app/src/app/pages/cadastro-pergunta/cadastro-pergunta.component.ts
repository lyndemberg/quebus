import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './cadastro-pergunta.component.html',
  styleUrls: ['./cadastro-pergunta.component.css']
})
export class CadastroPerguntaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Cadastro de pergunta');
  }

}
