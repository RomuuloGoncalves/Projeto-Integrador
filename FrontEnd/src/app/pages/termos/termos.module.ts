import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosPageRoutingModule } from './termos-routing.module';

import { TermosPage } from './termos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [TermosPage]
})
export class TermosPageModule {}
