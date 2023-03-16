import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-audio-widget',
  templateUrl: './audio-widget.component.html',
  styleUrls: ['./audio-widget.component.css']
})
export class AudioWidgetComponent implements OnInit {

  constructor() { }

  @Output() deleteEvent = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit()
  }

}
