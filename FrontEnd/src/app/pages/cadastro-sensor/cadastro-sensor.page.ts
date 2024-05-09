import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArduinoService } from 'src/app/services/arduino.service';
import { SensorService } from 'src/app/services/sensor.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-sensor',
  templateUrl: './cadastro-sensor.page.html',
  styleUrls: ['./cadastro-sensor.page.scss'],
})
export class CadastroSensorPage implements OnInit {

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  constructor(private Sensor: SensorService, private Toast: ToastService, private Usuario: UsuarioService, private Arduino: ArduinoService) { }
  id_usuario = this.Usuario.id_usuario
  erros: any = {};
  loading: boolean = false;
  arduinos: any = []

  ngOnInit() {
    this.listarArduino()
  }

  public listarArduino(){
    this.Arduino.listarArduinoUsuario(this.id_usuario).subscribe(
      response => {
        console.log('', response);
        this.loading = false;
        this.arduinos = response

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

  public cadastrar() {
    this.loading = true;
    const Sensor = this.cadastoForm.form.value;
    console.log(Sensor)
    this.Sensor.cadastrarDados(Sensor).subscribe(
      response => {
        console.log('Dados cadastrados com sucesso!', response);
        this.loading = false;

        const tipo = 'success';
        const mensagem = 'Cadastro realizado com sucesso';
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