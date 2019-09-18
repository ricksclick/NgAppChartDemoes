import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsBaseRoutingModule } from './highcharts-routing.module';
import { HighChartsBaseComponent } from './highcharts.component';


@NgModule({
  declarations: [HighChartsBaseComponent],
  imports: [
    CommonModule,
    HighChartsBaseRoutingModule
  ]
})
export class HighChartsDemoModule { }
