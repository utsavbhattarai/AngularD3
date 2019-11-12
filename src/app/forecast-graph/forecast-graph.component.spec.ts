import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastGraphComponent } from './forecast-graph.component';

describe('ForecastGraphComponent', () => {
  let component: ForecastGraphComponent;
  let fixture: ComponentFixture<ForecastGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
