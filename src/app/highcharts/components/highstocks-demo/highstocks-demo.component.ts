import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
StockModule(Highcharts);

import HC_customEvents from 'highcharts-custom-events';
HC_customEvents(Highcharts);

@Component({
  selector: 'app-highstocks-demo',
  templateUrl: './highstocks-demo.component.html',
  styleUrls: ['./highstocks-demo.component.scss']
})
export class HighstocksDemoComponent implements OnInit {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;
  updateDemo2 = false;
  usedIndex = 0;
  chartTitle = 'My chart'; // for init - change through titleChange

  charts = [
    {
      hcOptions: {
        title: { text: this.chartTitle },
        subtitle: { text: '1st data set' },
        plotOptions: {
          series: {
            pointStart: Date.now(),
            pointInterval: 86400000 // 1 day
          }
        },
        series: [
          {
            type: 'bar',
            data: [11, 2, 3],
            threshold: 5,
            negativeColor: 'red',
            events: {
              dblclick(event) {
                console.log('dblclick - thanks to the Custom Events plugin', event);
              }
            }
          },
          {
            type: 'bar',
            data: [
              [0, 15, -6, 7],
              [7, 12, -1, 3],
              [3, 10, -3, 3]
            ],
            threshold: 5,
            negativeColor: 'red'
          }
        ]
      } as Highcharts.Options,
      hcCallback: (chart: Highcharts.Chart) => {
        console.log('some variables: ', Highcharts, chart, this.charts);
      }
    },
    {
      hcOptions: {
        title: { text: this.chartTitle },
        subtitle: { text: '2nd data set' },
        series: [{
          type: 'column',
          data: [4, 3, -12],
          threshold: -10
        }, {
          type: 'ohlc',
          data: [
            [0, 15, -6, 7],
            [7, 12, -1, 3],
            [3, 10, -3, 3]
          ]
        }]
      } as Highcharts.Options,
      hcCallback: () => { }
    },
    {
      hcOptions: {
        title: { text: this.chartTitle },
        subtitle: { text: '3rd data set' },
        series: [{
          type: 'scatter',
          data: [1, 2, 3, 4, 5]
        }, {
          type: 'areaspline',
          data: [
            5,
            11,
            3,
            6,
            0
          ]
        }]
      } as Highcharts.Options,
      hcCallback: () => { }
    }
  ];

  // change in all places
  titleChange(event: any) {
    const v = event;
    this.chartTitle = v;

    this.charts.forEach((el) => {
      el.hcOptions.title.text = v;
    });

    // trigger ngOnChanges
    this.updateDemo2 = true;
  }

  ngOnInit() {
  }

}
