import { HttpErrorResponse } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { ArduinoService } from 'src/app/services/arduino.service';
import { SensorService } from 'src/app/services/sensor.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild('imagemForm') private imagemForm!: NgForm;

  constructor(private Arduino: ArduinoService, private Sensor: SensorService, private Toast: ToastService, private Usuario: UsuarioService, private Cookie: CookieService, private alertController: AlertController) { }

  ngOnInit() {
    this.carregarPerfil()
  }

  loading = false;
  arduinos: any = []
  usuario!: any
  nome_usuario?: string = this.Usuario.nome_usuario
  id_usuario: any = (this.Usuario.id_usuario)
  quantidade_arduinos = 0
  private carregarPerfil() {
    this.Usuario.pegarUsuario(this.Usuario.id_usuario).subscribe(
      (response: any) => {
        console.log("user", response)
        this.usuario = response;
        this.usuario.imagem = this.Usuario.pegarImagem(this.usuario!.imagem)
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
        console.log("arduinos", response)
        this.arduinos = response
        this.loading = false;
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

  async mostrarAlertaExcluirArduino(id: number) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja excluir o arduíno?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.excluirArduino(id)
          }
        }
      ],
    });

    await alert.present();
  }

  excluirArduino(id: number) {
    this.Arduino.excluirArduino(id).subscribe(
      response => {
        const tipo = 'success';
        const mensagem = 'Arduíno excluído com sucesso';
        location.reload();

        this.Toast.mostrarToast(tipo, mensagem);
      },
      error => {
        console.error('Erro ao excluir os dados:', error);
        const tipo = 'danger';
        const mensagem = 'Erro ao excluir arduíno!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );
  }

  async mostrarAlertaExcluirSensor(id: number) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja excluir o sensor?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.excluirSensor(id)
          }
        }
      ],
    });

    await alert.present();
  }

  excluirSensor(id: number) {
    this.Sensor.excluirSensor(id).subscribe(
      response => {
        const tipo = 'success';
        const mensagem = 'Sensor excluído com sucesso';
        location.reload();

        this.Toast.mostrarToast(tipo, mensagem);
      },
      error => {
        console.error('Erro ao excluir os dados:', error);
        const tipo = 'danger';
        const mensagem = 'Erro ao excluir o sensor!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );
  }

  arqsSelecionados: File[] = [];
  nomeArqSelecionado?: string
  selecionarArqs(event: any) {
    this.arqsSelecionados = event.target.files;

  }

  mudarImagem() {
    const imagem = this.imagemForm.form.value;
    imagem.imagem = this.arqsSelecionados[0]
    imagem.id = this.id_usuario
    console.log(imagem)
    this.Usuario.alterarImagem(imagem).subscribe(
      (response: any) => {
        console.log(response)
        location.reload()
        const tipo = 'success';
        const mensagem = 'Imagem alterada com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);

      },

      (badReponse: HttpErrorResponse) => {
        console.log(badReponse)
        const tipo = 'danger';
        const mensagem = 'Erro ao trocar imagem!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    )
  }
}
