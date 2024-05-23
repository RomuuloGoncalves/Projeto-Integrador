import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogedGuard } from './auth/loged.guard';
import { RedirectGuard } from './auth/redirect.guard';

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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [RedirectGuard]
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
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'cadastro-arduino',
    loadChildren: () => import('./pages/cadastro-arduino/cadastro-arduino.module').then( m => m.CadastroArduinoPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'cadastro-sensor',
    loadChildren: () => import('./pages/cadastro-sensor/cadastro-sensor.module').then( m => m.CadastroSensorPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'privacidade',
    loadChildren: () => import('./pages/privacidade/privacidade.module').then( m => m.PrivacidadePageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./pages/cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./pages/termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'codigo-arduino/:id_arduino',
    loadChildren: () => import('./pages/codigo-arduino/codigo-arduino.module').then( m => m.CodigoArduinoPageModule),
    canActivate: [LogedGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
