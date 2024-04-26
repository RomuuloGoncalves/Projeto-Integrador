import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoPageRoutingModule } from './grafico-routing.module';

import { GraficoPage } from './grafico.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { GraficoArComponent } from 'src/app/components/grafico/grafico-ar/grafico-ar.component';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [GraficoPage, GraficoArComponent]
})
export class GraficoPageModule {}
