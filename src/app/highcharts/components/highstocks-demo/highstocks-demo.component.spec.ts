import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighstocksDemoComponent } from './highstocks-demo.component';

describe('HighstocksDemoComponent', () => {
  let component: HighstocksDemoComponent;
  let fixture: ComponentFixture<HighstocksDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighstocksDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighstocksDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
