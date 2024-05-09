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

  public atualizarDados(dados: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, dados);
    
    return this.Server.put('/views/usuario/atualizar.php', dados);
  }

  public alterarImagem(data: any) {
    const formData = new FormData();
    formData.append('imagem', data.imagem);
    formData.append('id_usuario', data.id);
    console.log(formData)
    return this.Server.upload('/views/usuario/mudar_imagem.php', formData);
  }

  public login(dados: any): Observable<any> {
    return this.Server.post('/login/logar.php', dados);
  }

  public pegarUsuario(id: any): Observable<any> {
    return this.Server.get(`/views/usuario/usuario_id.php?id=${id}`);
  }

  public limparToken() {
    this.Cookie.delete('token');
    this.Cookie.delete('nome_usuario');
    this.Cookie.delete('id_usuario');
  }

  public pegarImagem(produto:any){
    return this.Server.imagem(produto)
  }

  public logout() {
    return this.Server.post('/login/verificarlogin.php', null);
  }
}
