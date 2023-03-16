import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lighting-widget',
  templateUrl: './lighting-widget.component.html',
  styleUrls: ['./lighting-widget.component.css']
})
export class LightingWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() deleteEvent = new EventEmitter();

  delete() {
    this.deleteEvent.emit()
  }

}
