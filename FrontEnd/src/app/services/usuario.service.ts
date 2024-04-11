import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private Cookie: CookieService, private Server: ServerService) { }

  private readonly token: string = this.Cookie.get('token');
  public readonly logedIn: boolean = this.token !== '';


  public cadastrarDados(dados: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, dados);
    return this.Server.post('/views/usuario/cadastrar.php', dados);
  }

  public login(dados: any): Observable<any> {
    return this.Server.post('/login/logar.php', dados);
  }

  public limparToken() {
    this.Cookie.delete('token');
  }

  public logout() {
    return this.Server.post('/login/verificarlogin.php', null);
  }
}
