import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingWidgetComponent } from './lighting-widget.component';

describe('LightingWidgetComponent', () => {
  let component: LightingWidgetComponent;
  let fixture: ComponentFixture<LightingWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightingWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
