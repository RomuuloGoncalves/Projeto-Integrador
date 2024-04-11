import { Component, OnInit } from '@angular/core';
import { ArduinoService } from 'src/app/services/arduino.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private Arduino: ArduinoService, private Toast: ToastService) { }

  ngOnInit() {
    this.listarArduinos()
  }
  loading = false;

   arduinos:any = []
   
   listarArduinos(){
    this.Arduino.listarArduino().subscribe(
      response => {
        this.arduinos = response
        this.loading = false;
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
