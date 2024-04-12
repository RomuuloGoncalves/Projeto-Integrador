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
  public readonly nome_usuario: string = this.Cookie.get('nome_usuario');
  public readonly id_usuario: number = parseInt(this.Cookie.get('id_usuario'), 10);

  public readonly logedIn: boolean = this.token !== '';

  public cadastrarDados(dados: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, dados);
    return this.Server.post('/views/usuario/cadastrar.php', dados);
  }

  public login(dados: any): Observable<any> {
    return this.Server.post('/login/logar.php', dados);
  }

  public pegarUsuario(id: any): Observable<any> {
    return this.Server.get(`/views/usuario/usuario_id.php?${id}`);
  }

  public limparToken() {
    this.Cookie.delete('token');
    this.Cookie.delete('nome_usuario');
    this.Cookie.delete('id_usuario');
  }

  public logout() {
    return this.Server.post('/login/verificarlogin.php', null);
  }
}
