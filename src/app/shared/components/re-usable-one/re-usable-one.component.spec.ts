import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableOneComponent } from './re-usable-one.component';

describe('ReUsableOneComponent', () => {
  let component: ReUsableOneComponent;
  let fixture: ComponentFixture<ReUsableOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReUsableOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUsableOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
