import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioStorageService } from '../services/usuario-storage.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ForbiddenInterceptor implements HttpInterceptor {

  constructor(private usuarioStorageService: UsuarioStorageService,
              private router: Router,
              private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        tap(
            (event: HttpEvent<any>) => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 403) {
                    this.toastr.error('', 'Você não tem permissão para este acesso!');
                    this.router.navigate(['/paginainicial']);
                  }
                }
            }
        )
    );
  }

}
