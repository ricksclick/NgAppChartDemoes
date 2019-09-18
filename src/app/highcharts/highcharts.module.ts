import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsBaseRoutingModule } from './highcharts-routing.module';
import { HighChartsBaseComponent } from './highcharts.component';
import { StocklistComponent } from './components/stocklist/stocklist.component';
import { StockbodyComponent } from './components/stockbody/stockbody.component';
import { StocklistItemComponent } from './components/stocklist/stocklist-item/stocklist-item.component';


@NgModule({
  declarations: [HighChartsBaseComponent, StocklistComponent, StockbodyComponent, StocklistItemComponent],
  imports: [
    CommonModule,
    HighChartsBaseRoutingModule
  ]
})
export class HighChartsDemoModule { }
