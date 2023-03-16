import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-displays-widget',
  templateUrl: './displays-widget.component.html',
  styleUrls: ['./displays-widget.component.css']
})
export class DisplaysWidgetComponent implements OnInit {

  constructor() { }

  @Output() deleteEvent = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit()
  }

}
