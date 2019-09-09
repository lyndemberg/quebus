import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Pergunta } from 'src/app/model/pergunta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private URL_RESOURCE = environment.urlBaseApi + environment.perguntaPath;

  constructor(private http: HttpClient) { }

  cadastrar(pergunta: Pergunta): Observable<HttpResponse<any>> {
    return this.http.post(this.URL_RESOURCE, pergunta, { observe: 'response'} );
  }

  buscarPorId(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`${this.URL_RESOURCE}/${id}`, { observe: 'response'} );
  }

  listarPerguntasPorUsuario(idUsuario: string): Observable<HttpResponse<any>> {
    return this.http.get(`${this.URL_RESOURCE}?user=${idUsuario}`, { observe: 'response' } );
  }
}
