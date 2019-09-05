import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioStorage: UsuarioStorageService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Página inicial');
    this.usuario = this.usuarioStorage.recuperarUsuarioLocal();
  }

}
