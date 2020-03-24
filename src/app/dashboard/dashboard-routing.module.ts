import { Version3Component } from './dashboard/version3/version3.component';
import { Version2Component } from './dashboard/version2/version2.component';
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
  }, {
    path: 'v2',
    component: Version2Component
  }, {
    path: 'v3',
    component: Version3Component
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
