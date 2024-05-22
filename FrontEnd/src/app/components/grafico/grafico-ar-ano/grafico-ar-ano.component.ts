import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DadosSensoresService } from 'src/app/services/dados-sensores.service';
import { ToastService } from 'src/app/services/toast.service';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico-ar-ano',
  templateUrl: './grafico-ar-ano.component.html',
  styleUrls: ['./grafico-ar-ano.component.scss'],
})
export class GraficoArAnoComponent  implements OnInit {

  constructor(private DadosSensores: DadosSensoresService, private Toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.coletarDados()
  }

  erros: any = {};
  loading: boolean = false;
  dadosSensores: any = {};

  coletarDados(){
    this.loading = true;
    this.DadosSensores.coletarDadosSensoresAnos().subscribe(
      response => {
        console.log(response);
        this.loading = false;
        
        const tipo = 'success';
        const mensagem = 'O gráfico foi gerado com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);
        this.dadosSensores = response;
        this.gerarGrafico();


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
  gerarGrafico() {
    // const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const semanalmente = new Chart('grafico__ar__ano', {
      type: 'bar',
      data: {
        // labels: diasDaSemana,
        datasets: [
          {
            label: 'Ano atual',
            data: this.dadosSensores.atual,
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: 2
          },
          {
            label: 'Ano passado',
            data: this.dadosSensores.passado,
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
