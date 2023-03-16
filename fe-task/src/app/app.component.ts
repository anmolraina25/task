import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'fe-task';
  widgetsList: string[] = ['air', 'temp', 'audio', 'displays', 'lighting']

  onDelete(index: number) {
    this.widgetsList.splice(index, 1);
    if (this.widgetsList.length === 0) {
      this.widgetsList = ['air', 'temp', 'audio', 'displays', 'lighting'];
    }
  }
}
