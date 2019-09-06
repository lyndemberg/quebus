import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioStorageService } from '../services/usuario-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private usuarioStorageService: UsuarioStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.usuarioStorageService.recuperarUsuarioLocal();
    if (!!user) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    return next.handle(req);
  }

}
