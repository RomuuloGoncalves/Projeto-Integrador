import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSensorPage } from './cadastro-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSensorPageRoutingModule {}
