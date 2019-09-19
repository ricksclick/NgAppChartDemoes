import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartDataService } from '../../../services/highchart.data.service';

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.scss']
})
export class StockbodyComponent implements OnInit, AfterViewInit {
  private _isLoading = true;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  constructor(private hcs: HighchartDataService) {

  }


  ngOnInit() { }

  ngAfterViewInit() {
    // this.createChart();
  }
  createChart(symbolId: string) {
    this.hcs.loadData('ATVI', (symbolId, data) => {
      this._isLoading = true;
    });
  }

  get isLoading() {
    return this._isLoading;
  }

}
