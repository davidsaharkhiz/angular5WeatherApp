import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherResultComponent } from './weather-result/weather-result.component';
import { WeatherResultListComponent } from './weather-result-list/weather-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherResultComponent,
    WeatherResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
