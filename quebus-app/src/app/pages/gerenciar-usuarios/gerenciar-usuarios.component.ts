import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { toast } from 'angular2-materialize';

@Component({
  templateUrl: './gerenciar-usuarios.component.html',
  styleUrls: ['./gerenciar-usuarios.component.css']
})
export class GerenciarUsuariosComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  usuarioList: Usuario[] = [];

  constructor(private titleService: Title,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Gerenciar usuários');
    this.subscriptions.push(
      this.usuarioService.listarTodos().subscribe(response => {
        this.usuarioList = response.body.data;
      }, error => {
        toast('Não foi possível listar os usuários', 4000);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
