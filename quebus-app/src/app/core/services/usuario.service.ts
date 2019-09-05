import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL_RESOURCE = environment.urlBaseApi + environment.usuarioPath;

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.URL_RESOURCE, {observe: 'response'});
  }

  cadastrar(usuario: Usuario): Observable<HttpResponse<any>> {
    return this.http.post(this.URL_RESOURCE, usuario, { observe: 'response'} );
  }
}
