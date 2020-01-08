import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  ngOnDestroy(): void {
    this.body.classList.remove('sidebar-mini');
    this.body.classList.remove('layout-fixed');
  }

  constructor() { }

  ngOnInit() {
    this.body.classList.add('sidebar-mini');
    this.body.classList.add('layout-fixed');
  }

}
