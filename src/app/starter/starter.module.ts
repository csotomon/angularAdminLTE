import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter/starter.component';
import { ContentComponent } from './starter/content/content.component';
import { ControlSideBarComponent } from './starter/control-side-bar/control-side-bar.component';
import { MainSideBarComponent } from './starter/main-side-bar/main-side-bar.component';
import { NavBarComponent } from './starter/nav-bar/nav-bar.component';
import { FooterComponent } from './starter/footer/footer.component';


@NgModule({
  declarations: [StarterComponent, ContentComponent, ControlSideBarComponent, MainSideBarComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
