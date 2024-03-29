import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BaseComponent } from './base.component';


const indexedRoute: Route = {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
};

const fallBackRoute: Route = {
  path: '**',
  redirectTo: 'home'
};

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      { path: 'highcharts', loadChildren: () => import('../highcharts/highcharts.module').then(m => m.HighChartsDemoModule) },
      indexedRoute,
      fallBackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
