import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./app-admin/app-admin.module')
      .then(mod => mod.AppAdminModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./app-alerts/app-alerts.module')
      .then(mod => mod.AppAlertsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
