import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoArduinoPageRoutingModule } from './codigo-arduino-routing.module';

import { CodigoArduinoPage } from './codigo-arduino.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoArduinoPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [CodigoArduinoPage]
})
export class CodigoArduinoPageModule {}
