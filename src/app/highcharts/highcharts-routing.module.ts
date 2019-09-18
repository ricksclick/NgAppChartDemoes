import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighChartsBaseComponent } from './highcharts.component';

const routes: Routes = [{ path: '', component: HighChartsBaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsBaseRoutingModule { }
