import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'unidades',
        loadChildren: () => import('./unidades/unidades.module').then(m => m.UnidadesPageModule)
        
      },
      {
        path: 'monitoreo',
        loadChildren: () => import('./monitoreo/monitoreo.module').then(m => m.MonitoreoPageModule)
      },
      {
        path: 'operadores',
        loadChildren: () => import('./operadores/operadores.module').then(m => m.OperadoresPageModule)
      },
      {
        path: 'viajes',
        loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesPageModule)
      }
      ,
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      }
      ,
      {
        path: 'trafico',
        loadChildren: () => import('./trafico/trafico.module').then(m => m.TraficoPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
    
  },
  {
    path: 'trafico',
    loadChildren: () => import('./trafico/trafico.module').then( m => m.TraficoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class TabsPageRoutingModule {}
