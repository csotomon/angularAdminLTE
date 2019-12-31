import { ContentComponent } from './starter/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
