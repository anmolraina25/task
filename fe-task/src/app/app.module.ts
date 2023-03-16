import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQualityWidgetComponent } from './air-quality-widget/air-quality-widget.component';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';
import { AudioWidgetComponent } from './audio-widget/audio-widget.component';
import { LightingWidgetComponent } from './lighting-widget/lighting-widget.component';
import { DisplaysWidgetComponent } from './displays-widget/displays-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityWidgetComponent,
    TemperatureWidgetComponent,
    AudioWidgetComponent,
    LightingWidgetComponent,
    DisplaysWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
