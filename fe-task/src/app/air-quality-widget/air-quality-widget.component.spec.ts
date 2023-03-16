import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityWidgetComponent } from './air-quality-widget.component';

describe('AirQualityWidgetComponent', () => {
  let component: AirQualityWidgetComponent;
  let fixture: ComponentFixture<AirQualityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
