import { Component, OnInit, Input } from '@angular/core';
import { WeatherResultComponent } from '../weather-result/weather-result.component';

@Component({
  selector: 'app-weather-result-list',
  templateUrl: './weather-result-list.component.html',
  styleUrls: ['./weather-result-list.component.css']
})
export class WeatherResultListComponent implements OnInit {

  @Input() results: Array<WeatherResultComponent>;

  constructor() { }

  ngOnInit() {
    
  }

  

}
