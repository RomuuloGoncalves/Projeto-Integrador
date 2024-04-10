import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiUrl = 'http://localhost/Projeto-Integrador/System/views/usuario/cadastrar.php'; // Substitua pela URL da sua API PHP

  constructor(private http: HttpClient) { }

  cadastrarDados(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
