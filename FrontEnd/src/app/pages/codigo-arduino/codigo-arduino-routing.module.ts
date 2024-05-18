import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoArduinoPage } from './codigo-arduino.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoArduinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoArduinoPageRoutingModule {}
