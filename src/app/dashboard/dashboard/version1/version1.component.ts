import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'summernote';
import { } from 'daterangepicker';
//import { } from  'jquery-knob';
import * as moment from 'moment';


// This is not a good practice but is neccesary for jquery modules what doesn't have @types
declare let $: any;


@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.scss']
})
export class Version1Component implements OnInit {


  constructor() { }

  ngOnInit() {
    // Make the dashboard widgets sortable Using jquery UI
    $('.connectedSortable').sortable({
      placeholder: 'sort-highlight',
      connectWith: '.connectedSortable',
      handle: '.card-header, .nav-tabs',
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    jQuery('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

    // jQuery UI sortable for the todo list
    $('.todo-list').sortable({
      placeholder: 'sort-highlight',
      handle: '.handle',
      forcePlaceholderSize: true,
      zIndex: 999999
    });

    // bootstrap WYSIHTML5 - text editor
    jQuery('.textarea').summernote();

    jQuery('.daterange').daterangepicker({
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
    }, function (start, end) {
      window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
    });

    $('.knob').knob();

    // jvectormap data
    let visitorsData = {
      'US': 398, //USA
      'SA': 400, //Saudi Arabia
      'CA': 1000, //Canada
      'DE': 500, //Germany
      'FR': 760, //France
      'CN': 300, //China
      'AU': 700, //Australia
      'BR': 600, //Brazil
      'IN': 800, //India
      'GB': 320, //Great Britain
      'RU': 3000 //Russia
    };

    // World map by jvectormap
    $('#world-map').vectorMap({
      map              : 'usa_en',
      backgroundColor  : 'transparent',
      regionStyle      : {
        initial: {
          fill            : 'rgba(255, 255, 255, 0.7)',
          'fill-opacity'  : 1,
          stroke          : 'rgba(0,0,0,.2)',
          'stroke-width'  : 1,
          'stroke-opacity': 1
        }
      },
      series           : {
        regions: [{
          values           : visitorsData,
          scale            : ['#ffffff', '#0154ad'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionLabelShow ({ e, el, code }: { e; el; code; }) {
        if (typeof visitorsData[code] != 'undefined') {
          el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
        }
      }
    });


  }

}
