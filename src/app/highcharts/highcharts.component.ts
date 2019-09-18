import { Component, OnInit, ViewChild } from '@angular/core';
import { StockbodyComponent } from './components/stockbody/stockbody.component';
import { StockSymbol } from '../shared/models/stock-symbol';

@Component({
  selector: 'highcharts-base',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighChartsBaseComponent implements OnInit {
  @ViewChild(StockbodyComponent, { static: false }) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol) {
    this.stockbody.createChart(symbol.id);
  }
  constructor() { }

  ngOnInit() {
  }

}
