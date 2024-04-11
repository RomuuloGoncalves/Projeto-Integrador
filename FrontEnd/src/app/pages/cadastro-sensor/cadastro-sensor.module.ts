import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSensorPageRoutingModule } from './cadastro-sensor-routing.module';

import { CadastroSensorPage } from './cadastro-sensor.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSensorPageRoutingModule,
    HeaderModule,
    BtnLoadingModule
  ],
  declarations: [CadastroSensorPage]
})
export class CadastroSensorPageModule {}
