import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  textIcon = 'USER'; // value default
  sideNavActions = new EventEmitter<any | MaterializeAction>();

  constructor(private el: ElementRef) { }


  ngOnInit() {
    // carregar dados do usuário para exibir no avatar do menu
    const usuario = this.userStorageService.getUserAuthorization();
    if (usuario != null) {
      this.usuario.login = usuario.login;
      this.usuario.nome = usuario.nome;
      this.getTextIconCircle();
    }
    this.carregarSideNav();
  }

  private getTextIconCircle(): void {
    const arr = this.usuario.nome.split(' ');
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
    $(this.el.nativeElement).find('.button-collapse').sideNav();
  }

}
