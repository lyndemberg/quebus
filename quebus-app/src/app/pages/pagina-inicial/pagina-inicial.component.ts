import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { Title } from '@angular/platform-browser';
import { Aviso } from 'src/app/model/aviso.model';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  ultimoAviso: Aviso = new Aviso();
  private subscription: Subscription;

  constructor(private usuarioStorage: UsuarioStorageService,
              private avisoService: AvisoService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Página inicial');
    this.usuario = this.usuarioStorage.recuperarUsuarioLocal();
    this.subscription = this.avisoService.recuperarUltimoAviso().subscribe(
      (response) => {
        this.ultimoAviso = response.body.data;
      }, (error) => {

      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription != null) { this.subscription.unsubscribe(); }
  }

}
