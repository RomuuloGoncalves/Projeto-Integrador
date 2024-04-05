import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradeCurricularPageRoutingModule } from './grade-curricular-routing.module';

import { GradeCurricularPage } from './grade-curricular.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradeCurricularPageRoutingModule,
    HeaderModule
  ],
  declarations: [GradeCurricularPage]
})
export class GradeCurricularPageModule {}
