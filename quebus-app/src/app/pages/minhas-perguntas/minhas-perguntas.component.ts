import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { Pergunta } from 'src/app/model/pergunta.model';
import { Subscription } from 'rxjs';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { toast } from 'angular2-materialize';

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
    this.subscription = this.perguntaService.listarPerguntasPorUsuario(usuarioId)
      .subscribe(
        (response) => {
          this.perguntaList = response.body.data;
        }, (error) => {
          toast('Não foi possível listar suas perguntas', 2000);
        }
      );
  }

}
