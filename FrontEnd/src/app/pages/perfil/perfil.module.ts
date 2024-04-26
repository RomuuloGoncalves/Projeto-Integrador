import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';

import { PerfilPage } from './perfil.page';
import { AtualizarPerfilComponent } from 'src/app/components/perfil/modal/atualizar-perfil/atualizar-perfil.component';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';
import { MaskitoDirective } from '@maskito/angular'
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    HeaderModule,
    BtnLoadingModule, 
    MaskitoDirective,
    FooterModule
  ],
  declarations: [PerfilPage, AtualizarPerfilComponent]
})
export class PerfilPageModule {}
