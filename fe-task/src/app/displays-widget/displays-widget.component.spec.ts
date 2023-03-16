import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysWidgetComponent } from './displays-widget.component';

describe('DisplaysWidgetComponent', () => {
  let component: DisplaysWidgetComponent;
  let fixture: ComponentFixture<DisplaysWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
