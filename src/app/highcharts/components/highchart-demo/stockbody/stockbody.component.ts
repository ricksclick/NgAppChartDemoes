import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('container', { static: false }) chartContainer: ElementRef;


  ngOnInit() { }

  ngAfterViewInit() {
    this.createChart('abcd');
  }
  createChart(symbolId: string) {
    this.hcs.loadData('ATVI', (symbolId, data) => {
      this._isLoading = true;
      // this.chartOptions = this.hcs.transformConfiguration(symbolId, data);

    });
  }

  get isLoading() {
    return this._isLoading;
  }

}
