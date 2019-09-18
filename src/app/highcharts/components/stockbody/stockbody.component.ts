import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HighchartDataService } from '../../services/highchart.data.service';

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.scss']
})
export class StockbodyComponent implements OnInit, AfterViewInit {

  @ViewChild('charts', { static: false }) private chartEl: ElementRef;
  private _isLoading = false;
  constructor(private hcs: HighchartDataService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy() {

  }

  createChart() {
    this.hcs.loadData("ATVI", (symbol, data) => {
      this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
      this._isLoading = true;
    });
  }

  get isLoading() {
    return this._isLoading;
  }

}
