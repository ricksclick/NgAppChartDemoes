import { Component, OnInit, ViewChild } from '@angular/core';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { StockSymbol } from 'src/app/shared/models/stock-symbol';

@Component({
  selector: 'app-highchart-demo',
  templateUrl: './highchart-demo.component.html',
  styleUrls: ['./highchart-demo.component.scss']
})
export class HighchartDemoComponent implements OnInit {
  @ViewChild(StockbodyComponent, { static: false }) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol) {
    this.stockbody.createChart(symbol.id);
  }

  constructor() { }

  ngOnInit() {
  }

}
