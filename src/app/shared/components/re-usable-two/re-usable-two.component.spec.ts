import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableTwoComponent } from './re-usable-two.component';

describe('ReUsableTwoComponent', () => {
  let component: ReUsableTwoComponent;
  let fixture: ComponentFixture<ReUsableTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReUsableTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUsableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
