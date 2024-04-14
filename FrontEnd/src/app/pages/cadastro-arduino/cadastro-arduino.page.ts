import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArduinoService } from 'src/app/services/arduino.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-arduino',
  templateUrl: './cadastro-arduino.page.html',
  styleUrls: ['./cadastro-arduino.page.scss'],
})
export class CadastroArduinoPage implements OnInit {

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  constructor(private Arduino: ArduinoService, private Toast: ToastService, private Usuario: UsuarioService) { }
  id_usuario = this.Usuario.id_usuario
  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public cadastrar() {
    this.loading = true;
    const arduino = this.cadastoForm.form.value;
    console.log(arduino)
    this.Arduino.cadastrarDados(arduino).subscribe(
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
