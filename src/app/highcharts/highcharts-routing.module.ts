import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighChartsBaseComponent } from './highcharts.component';
import { HighchartDemoComponent } from './components/highchart-demo/highchart-demo.component';
import { HighstocksDemoComponent } from './components/highstocks-demo/highstocks-demo.component';

const routes: Routes = [
  {
    path: '', component: HighChartsBaseComponent, children: [
      { path: 'highcharts-demo', component: HighchartDemoComponent },
      { path: 'highstocks-demo', component: HighstocksDemoComponent },
      { path: '', redirectTo: 'highcharts-demo' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsBaseRoutingModule { }
