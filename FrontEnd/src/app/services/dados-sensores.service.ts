import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class DadosSensoresService {

  constructor(private Server: ServerService) { }

  coletarDadosSensores() {
    return this.Server.get(`/views/dados_sensores/listar.php`);
  }
}
