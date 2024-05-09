import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroArduinoPageRoutingModule } from './cadastro-arduino-routing.module';

import { CadastroArduinoPage } from './cadastro-arduino.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroArduinoPageRoutingModule,
    HeaderModule,
    BtnLoadingModule
  ],
  declarations: [CadastroArduinoPage]
})
export class CadastroArduinoPageModule { }
