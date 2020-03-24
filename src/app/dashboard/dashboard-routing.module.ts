import { Version1Component } from './dashboard/version1/version1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    redirectTo: 'v1', pathMatch: 'full'
  }, {
    path: 'v1',
    component: Version1Component
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
