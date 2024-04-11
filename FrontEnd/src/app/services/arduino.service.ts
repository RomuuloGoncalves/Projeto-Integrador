import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  constructor(private Server: ServerService) { }

  cadastrarDados(dados: any): Observable<any> {
    return this.Server.post('/views/arduino/cadastrar.php', dados);
  }
  listarArduino(){
    return this.Server.get('/views/arduino/listar.php');
  }
}
