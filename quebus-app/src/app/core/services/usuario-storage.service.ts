import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStorageService {

  constructor() { }

  deslogar() {
    localStorage.removeItem('usuario');
    localStorage.clear();
  }

  public salvarUsuarioLocal(data: Usuario) {
    localStorage.removeItem('usuario');
    localStorage.setItem('usuario', JSON.stringify(data));
  }

  public recuperarUsuarioLocal(): Usuario {
    return JSON.parse(localStorage.getItem('usuario'));
  }
}
