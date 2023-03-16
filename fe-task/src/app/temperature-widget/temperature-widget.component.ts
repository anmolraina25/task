import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-widget',
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./temperature-widget.component.css']
})
export class TemperatureWidgetComponent implements OnInit {

  constructor() { }

  @Output() deleteEvent = new EventEmitter();


  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit()
  }

}
