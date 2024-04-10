import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {


  constructor(private Server: ServerService) { }

  cadastrarDados(dados: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, dados);
    return this.Server.post('/usuario/cadastrar.php', dados);
  }
}
