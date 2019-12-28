import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './admin/admin.component';
import { UserRoutes } from './user/user.routes';

const routes: Routes = [
  { path: '', component: AppAdminComponent, children: [...UserRoutes] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule {}
