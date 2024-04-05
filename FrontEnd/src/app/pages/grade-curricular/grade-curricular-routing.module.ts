import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradeCurricularPage } from './grade-curricular.page';

const routes: Routes = [
  {
    path: '',
    component: GradeCurricularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeCurricularPageRoutingModule {}
