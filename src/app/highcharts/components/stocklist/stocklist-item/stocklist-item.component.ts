import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockSymbol } from 'src/app/shared/models/stock-symbol';

@Component({
  selector: 'stocklist-item',
  templateUrl: './stocklist-item.component.html',
  styleUrls: ['./stocklist-item.component.scss']
})
export class StocklistItemComponent implements OnInit {

  @Input() symbol: StockSymbol;
  @Output() symbolSelected = new EventEmitter<StockSymbol>();
  constructor() { }

  ngOnInit() { }
  onSelected() {
    this.symbolSelected.emit(this.symbol);
  }

}
