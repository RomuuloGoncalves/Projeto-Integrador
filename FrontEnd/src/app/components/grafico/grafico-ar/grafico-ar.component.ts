import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico-ar',
  templateUrl: './grafico-ar.component.html',
  styleUrls: ['./grafico-ar.component.scss'],
})
export class GraficoArComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    this.gerarGrafico()
  }

  gerarGrafico() {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const semanalmente = new Chart('grafico__ar', {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Qualidade do ar',
            data: [0, 3, 20, 5, 29, 10, 5, 28],
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
