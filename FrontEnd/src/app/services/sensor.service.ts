import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private Server: ServerService) { }
  cadastrarDados(dados: any): Observable<any> {
    return this.Server.post('/views/sensor/cadastrar.php', dados);
  }

  listarSensorArduino(id: number) {
    return this.Server.get(`/views/sensor/listar_com_id.php?id=${id}`);
  }

  excluirSensor(id:number){
    return this.Server.delete(`/views/sensor/excluir.php?id=${id}`);
  }
}
