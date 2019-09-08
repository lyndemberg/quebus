import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { Pergunta } from 'src/app/model/pergunta.model';
import { Subscription } from 'rxjs';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';

@Component({
  templateUrl: './minhas-perguntas.component.html',
  styleUrls: ['./minhas-perguntas.component.css']
})
export class MinhasPerguntasComponent implements OnInit {

  private subscription: Subscription;
  perguntaList: Pergunta[] = [];

  constructor(private perguntaService: PerguntaService,
              private usuarioStorage: UsuarioStorageService) { }

  ngOnInit() {
    const usuarioId = this.usuarioStorage.recuperarUsuarioLocal()._id;
  }

}
