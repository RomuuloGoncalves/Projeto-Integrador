import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConscientizacaoPageRoutingModule } from './conscientizacao-routing.module';

import { ConscientizacaoPage } from './conscientizacao.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConscientizacaoPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [ConscientizacaoPage]
})
export class ConscientizacaoPageModule {}
