import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit, OnDestroy {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    this.body.classList.add('sidebar-mini');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('sidebar-mini');
  }

}
