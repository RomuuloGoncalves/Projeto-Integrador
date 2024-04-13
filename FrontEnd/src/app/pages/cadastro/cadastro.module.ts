import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    BtnLoadingModule,
    MaskitoDirective
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
