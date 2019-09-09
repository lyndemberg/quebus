import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/model/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private URL_RESOURCE = environment.urlBaseApi + environment.avisoPath;

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.URL_RESOURCE, {observe: 'response'});
  }

  cadastrar(aviso: Aviso): Observable<HttpResponse<any>> {
    return this.http.post(this.URL_RESOURCE, aviso, { observe: 'response'} );
  }

  deletar(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.URL_RESOURCE}/${id}`, { observe: 'response' });
  }

  recuperarUltimoAviso(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.URL_RESOURCE}/last`, { observe: 'response'} );
  }
}
