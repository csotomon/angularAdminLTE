import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version3',
  templateUrl: './version3.component.html',
  styleUrls: ['./version3.component.scss']
})
export class Version3Component implements OnInit {

  ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  };

  mode = 'index';
  intersect = true;

  public salesChart = {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
        },
        {
          backgroundColor: '#ced4da',
          borderColor: '#ced4da',
          data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: this.mode,
        intersect: this.intersect
      },
      hover: {
        mode: this.mode,
        intersect: this.intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback(value, index, values) {
              if (value >= 1000) {
                value /= 1000;
                value += 'k';
              }
              return '$' + value;
            }
          }, this.ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: this.ticksStyle
        }]
      }
    }
  };

  public visitorsChart = {
    data: {
      labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
      type: 'line',
      datasets: [{
        type: 'line',
        data: [100, 120, 170, 167, 180, 177, 160],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [60, 80, 70, 67, 80, 77, 100],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: this.mode,
        intersect: this.intersect
      },
      hover: {
        mode: this.mode,
        intersect: this.intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, this.ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: this.ticksStyle
        }]
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
