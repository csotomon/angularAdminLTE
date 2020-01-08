import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Version1Component } from './dashboard/version1/version1.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { MainSideBarComponent } from './dashboard/main-side-bar/main-side-bar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ControlSideBarComponent } from './dashboard/control-side-bar/control-side-bar.component';


@NgModule({
  declarations: [DashboardComponent, Version1Component, NavBarComponent, MainSideBarComponent, FooterComponent, ControlSideBarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
