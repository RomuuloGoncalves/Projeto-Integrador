import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'grade-curricular',
    loadChildren: () => import('./pages/grade-curricular/grade-curricular.module').then( m => m.GradeCurricularPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./pages/grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'conscientizacao',
    loadChildren: () => import('./pages/conscientizacao/conscientizacao.module').then( m => m.ConscientizacaoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastro-arduino',
    loadChildren: () => import('./pages/cadastro-arduino/cadastro-arduino.module').then( m => m.CadastroArduinoPageModule)
  },
  {
    path: 'cadastro-sensor',
    loadChildren: () => import('./pages/cadastro-sensor/cadastro-sensor.module').then( m => m.CadastroSensorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
