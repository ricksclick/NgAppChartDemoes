import { Component, OnInit, ViewChild } from '@angular/core';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { StockSymbol } from 'src/app/shared/models/stock-symbol';

import * as Highcharts from 'highcharts/highstock';

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
  selector: 'app-highchart-demo',
  templateUrl: './highchart-demo.component.html',
  styleUrls: ['./highchart-demo.component.scss']
})
export class HighchartDemoComponent implements OnInit {

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

  @ViewChild(StockbodyComponent, { static: false }) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol) {
    this.stockbody.createChart(symbol.id);
  }

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
