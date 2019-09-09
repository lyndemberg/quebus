import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioStorageService } from '../services/usuario-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private usuarioStorage: UsuarioStorageService,
              private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuarioLogado = this.usuarioStorage.recuperarUsuarioLocal();
    if (usuarioLogado) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
