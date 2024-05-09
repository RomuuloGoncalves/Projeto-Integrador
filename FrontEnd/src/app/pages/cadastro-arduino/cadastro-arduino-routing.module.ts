import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroArduinoPage } from './cadastro-arduino.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroArduinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroArduinoPageRoutingModule {}
