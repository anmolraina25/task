import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-air-quality-widget',
  templateUrl: './air-quality-widget.component.html',
  styleUrls: ['./air-quality-widget.component.css']
})
export class AirQualityWidgetComponent implements OnInit {

  constructor() { }

  @Output() deleteEvent = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit()
  }

}
