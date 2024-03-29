import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

/**
 *
 *
 * @export
 * @class HighchartDataService
 */
@Injectable({
  providedIn: 'root'
})
export class HighchartDataService {
  apikey = '810AMVHGA050E9HY';
  lastChart = null;

  constructor(private http: HttpClient) {

  }

  createChart(container, symbol, data = null) {
    const options: any = this.transformConfiguration(symbol, data);
    let { lastChart } = this;

    if (options.chart != null) {
      options.chart.renderTo = container;
    } else {
      options.chart = {
        renderTo: container
      };
    }

    if (lastChart != null) {
      lastChart.destroy();
    }

    lastChart = new Highcharts.Chart(options);
  }


  /**
   *
   *
   * @param {*} symbol
   * @param {*} data
   * @returns
   * @memberof HighchartDataService
   * @description Retrieve Chart Intra Day
   */
  chartIntraDay(symbol, data) {
    const config = {
      chart: { type: 'spline' },
      title: { text: symbol },
      xAxis: {
        type: 'datetime'
      },
      series: [{
        name: symbol,
        data
      }],
      rangeSelector: {
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'day',
          count: 1,
          text: '1D'
        }, {
          type: 'all',
          count: 1,
          text: 'All'
        }],
        selected: 1,
        inputEnabled: false
      }
    };

    return config;
  }

  transformConfiguration(symbol, data) {
    const chartConfig = this.chartIntraDay(symbol, data);

    return chartConfig;
  }

  createStockQuery(tickerSymbol) {
    const url
      = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerSymbol}&interval=5min&apikey=${this.apikey}`;

    return encodeURI(url);
  }

  loadData(symbol, callback) {
    this.http.get(this.createStockQuery(symbol)).subscribe(this.onDataReceived.bind(this, symbol, callback));
  }

  onDataReceived(symbol, callback, rawData) {
    const highchartsData = this.transformDataForHighCharts(rawData);

    callback(symbol, highchartsData);

  }

  transformDataForHighCharts(rawData) {
    const quotes = rawData['Time Series (5min)'];
    const data = [];
    let item;

    // tslint:disable-next-line: forin
    for (const each in quotes) {
      item = quotes[each];
      data.push([new Date(each).getTime(),
      parseFloat(item['4. close'])]);
    }

    return data;
  }

}

