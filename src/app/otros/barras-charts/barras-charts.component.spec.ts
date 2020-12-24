import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasChartsComponent } from './barras-charts.component';

describe('BarrasChartsComponent', () => {
  let component: BarrasChartsComponent;
  let fixture: ComponentFixture<BarrasChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrasChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
