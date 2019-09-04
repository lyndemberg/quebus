import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  usuario: Usuario;
  textIcon = 'USER'; // value default
  sideNavActions = new EventEmitter<any | MaterializeAction>();

  constructor(private el: ElementRef,
              private router: Router,
              private usuarioStorage: UsuarioStorageService) { }


  ngOnInit() {
    // carregar dados do usuário para exibir no avatar do menu
    const usuario = this.usuarioStorage.recuperarUsuarioLocal();
    if (usuario != null) {
      this.usuario = usuario;
      this.getTextIconCircle();
    }
    this.carregarSideNav();
  }

  private getTextIconCircle(): void {
    const arr = this.usuario.name.split(' ');
    if (arr.length > 1) {
      this.textIcon = arr[0].substr(0, 1) + arr[1].substr(0, 1);
    }
  }

  abrirSideNav() {
    this.sideNavActions.emit({ action: 'sideNav', params: ['show'] });
  }
  fecharSideNav() {
    this.sideNavActions.emit({ action: 'sideNav', params: ['hide'] });
  }

  private carregarSideNav(): void {
    ($(this.el.nativeElement) as any).find('.button-collapse').sideNav();
  }

  sair(): void {
    this.usuarioStorage.deslogar();
    this.router.navigate(['login']);
  }

}
