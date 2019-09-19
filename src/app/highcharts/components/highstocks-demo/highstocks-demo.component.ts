import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import StockModule from 'highcharts/modules/stock';

StockModule(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato'
    }
  },
  legend: {
    enabled: false
  }
});

@Component({
  selector: 'app-highstocks-demo',
  templateUrl: './highstocks-demo.component.html',
  styleUrls: ['./highstocks-demo.component.scss']
})
export class HighstocksDemoComponent implements OnInit {

  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;
  optFromInputString = `
  {
    "title": { "text": "Highcharts chart" },
    "series": [{
      "data": [11,2,3],
      "zones": [{
        "value": 7.2,
        "dashStyle": "dot",
        "color": "red"
      }]
    }, {
      "data": [5,6,7]
    }]
  }
  `;

  optFromInput: Highcharts.Options = JSON.parse(this.optFromInputString);
  updateFromInput = false;

  seriesTypes: { [key: string]: string } = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line'
  };

  logChartInstance(chart: Highcharts.Chart) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    this.optFromInput = JSON.parse(this.optFromInputString);
  }

  toggleSeriesType(index: number = 0) {
    this.optFromInput.series[index].type =
      this.seriesTypes[this.optFromInput.series[index].type || 'line'] as
      'column' | 'scatter' | 'spline' | 'line';
    // nested change - must trigger update
    this.updateFromInput = true;
  }

  ngOnInit() {
  }

}