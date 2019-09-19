import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsBaseRoutingModule } from './highcharts-routing.module';
import { HighChartsBaseComponent } from './highcharts.component';
import { StocklistComponent } from './components/highchart-demo/stocklist/stocklist.component';
import { StockbodyComponent } from './components/highchart-demo/stockbody/stockbody.component';
import { StocklistItemComponent } from './components/highchart-demo/stocklist/stocklist-item/stocklist-item.component';
import { HighchartDemoComponent } from './components/highchart-demo/highchart-demo.component';
import { HighstocksDemoComponent } from './components/highstocks-demo/highstocks-demo.component';


@NgModule({
  declarations: [HighChartsBaseComponent, StocklistComponent, StockbodyComponent, StocklistItemComponent, HighchartDemoComponent, HighstocksDemoComponent],
  imports: [
    CommonModule,
    HighChartsBaseRoutingModule
  ]
})
export class HighChartsDemoModule { }
