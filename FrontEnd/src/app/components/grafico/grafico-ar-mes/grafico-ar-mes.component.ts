import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DadosSensoresService } from 'src/app/services/dados-sensores.service';
import { ToastService } from 'src/app/services/toast.service';
Chart.register(...registerables);
@Component({
  selector: 'app-grafico-ar-mes',
  templateUrl: './grafico-ar-mes.component.html',
  styleUrls: ['./grafico-ar-mes.component.scss'],
})
export class GraficoArMesComponent  implements OnInit {

  constructor(private DadosSensores: DadosSensoresService, private Toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.coletarDados()
  }

  erros: any = {};
  loading: boolean = false;

  coletarDados(){
    this.loading = true;
    this.DadosSensores.coletarDadosSensoresMes().subscribe(
      response => {
        console.log('Dados do mês', response);
        this.loading = false;
        
        const tipo = 'success';
        const mensagem = 'O gráfico foi gerado com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);
        this.gerarGrafico(response)


        },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = error.error.message;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );

  }
  gerarGrafico(response:any) {
    const semanas_mes = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

    const mensalmente = new Chart('grafico__ar__mes', {
      type: 'line',
      data: {
        labels: semanas_mes,
        datasets: [
          {
            label: 'Mês atual',
            data: response.ultimas_quatro_semanas,
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: 2
          },
          {
            label: 'Mês passado',
            data: response.quatro_semanas_anteriores,
            backgroundColor: '#d41919',
            borderColor: '#d41919',
            borderWidth: 2
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }


}
