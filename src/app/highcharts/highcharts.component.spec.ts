import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartsBaseComponent } from './highcharts.component';

describe('HighChartsBaseComponent', () => {
  let component: HighChartsBaseComponent;
  let fixture: ComponentFixture<HighChartsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
