import { Component, OnInit } from '@angular/core';
import { } from 'jquery';

@Component({
  selector: 'app-dashboard-control-side-bar',
  templateUrl: './control-side-bar.component.html',
  styleUrls: ['./control-side-bar.component.scss']
})
export class ControlSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $sidebar = jQuery('.control-sidebar');
    const $container = jQuery('<div />', {
      class: 'p-3 control-sidebar-content'
    });

    $sidebar.append($container);

    const navbar_dark_skins = [
      'navbar-primary',
      'navbar-secondary',
      'navbar-info',
      'navbar-success',
      'navbar-danger',
      'navbar-indigo',
      'navbar-purple',
      'navbar-pink',
      'navbar-teal',
      'navbar-cyan',
      'navbar-dark',
      'navbar-gray-dark',
      'navbar-gray',
    ];

    const navbar_light_skins = [
      'navbar-light',
      'navbar-warning',
      'navbar-white',
      'navbar-orange',
    ];

    $container.append(
      '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
    );
  }

}
