import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ArduinoService } from 'src/app/services/arduino.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private Arduino: ArduinoService, private Toast: ToastService, private Usuario: UsuarioService, private Cookie: CookieService) { }

  ngOnInit() {
    this.carregarPerfil()
  }
  loading = false;
  arduinos: any = []
  usuario!:any
  nome_usuario?: string = this.Usuario.nome_usuario 
  id_usuario: any = (this.Usuario.id_usuario) 
  quantidade_arduinos = 0  
  private carregarPerfil() {
    this.Usuario.pegarUsuario(this.Usuario.id_usuario).subscribe(
      (response: any) => {
        this.usuario = response;
        this.listagemArduino(this.id_usuario)
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
        this.loading = false;
      }
    );
  }

  listagemArduino(id_usuario: number) {
    this.Arduino.listarArduinoUsuarioSensor(id_usuario).subscribe(
      response => {
        console.log(response)
        this.arduinos = response
        this.loading = false;
        console.log(this.arduinos)
        this.quantidade_arduinos = this.arduinos.length
        const tipo = 'success';
        const mensagem = 'Listagem dos arduínos concluida';
        this.Toast.mostrarToast(tipo, mensagem);
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = 'Algo deu errado!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );
  }
}
