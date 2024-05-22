import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.filtrarSelecao({ detail: { value: this.selectedOptions } });
  }

  filtrar: { [chave: string]: boolean } = {};
  selectedOptions: string[] = ['semana', 'mes', 'ano']

  filtrarSelecao(e: any) {
    const valoresPermitidos = ["semana", "mes", "ano"];

    for (const chave of valoresPermitidos) {
      this.filtrar[chave] = false;
    }

    e.detail.value.forEach((chave: any) => {
      if (valoresPermitidos.includes(chave)) {
        this.filtrar[chave] = true;
      }
    });
  }
}
