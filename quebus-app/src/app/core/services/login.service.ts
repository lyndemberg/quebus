import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.urlBaseApi + environment.authPath;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse<any>> {
    const data = {
      username: `${username}`,
      password: `${password}`
    };
    return this.http.post(this.URL, data, {observe: 'response'});
  }
}
