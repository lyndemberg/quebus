import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario-list-component',
  templateUrl: './usuario-list-component.component.html',
  styleUrls: ['./usuario-list-component.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Input() usuarioList: Usuario[];

  constructor() { }

  ngOnInit() {
  }

}
