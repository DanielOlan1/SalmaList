import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  {
    path: 'unidades',
    loadChildren: () => import('./tabs/unidades/unidades.module').then(m => m.UnidadesPageModule)
  },
  {
    path: 'monitoreo',
    loadChildren: () => import('./tabs/monitoreo/monitoreo.module').then(m => m.MonitoreoPageModule)
  },
  {
    path: 'operadores',
    loadChildren: () => import('./tabs/operadores/operadores.module').then(m => m.OperadoresPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./tabs/viajes/viajes.module').then(m => m.ViajesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./tabs/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
