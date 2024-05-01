import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DadosSensoresService } from 'src/app/services/dados-sensores.service';
import { ToastService } from 'src/app/services/toast.service';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico-ar',
  templateUrl: './grafico-ar.component.html',
  styleUrls: ['./grafico-ar.component.scss'],
})
export class GraficoArComponent  implements OnInit {

  constructor(private DadosSensores: DadosSensoresService, private Toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.coletarDados()
  }

  erros: any = {};
  loading: boolean = false;

  coletarDados(){
    this.loading = true;
    this.DadosSensores.coletarDadosSensores().subscribe(
      response => {
        console.log(response);
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
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const semanalmente = new Chart('grafico__ar', {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Qualidade do ar',
            data: response,
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
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
