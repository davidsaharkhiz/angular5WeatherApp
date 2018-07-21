import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { WeatherResultComponent } from './weather-result/weather-result.component';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Constructor injection of our http service
  constructor(private http: HttpClient) {
  }

  // Properties
  title = 'Basic One-Day Weather App by David Saharkhiz';
  apiKey = "728b1d40d2c3197623966d70f6fb4b09";
  results : WeatherResultComponent[] = [];
  successfulQuery = false;
  lastSuccessfulQueryCity = "";

  //I would ideally like to move this to the weather component
  populateData = function () {

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let body = "";
    var resultwee = [];
    var resultwee2;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&APPID=" + this.apiKey;

    var observable = this.http.get(url).pipe(map((res:Response) => res));

    // Execute the observable
    observable.subscribe(
      //arrow success function to preserve lexical scope
      (result) => { 
        console.info(result);
        this.successfulQuery = true;
        this.lastSuccessfulQueryCity = this.cityName;
        this.results = [];
        result["weather"].forEach(
          (element) => { 
            var currentWeatherResult = new WeatherResultComponent();
            currentWeatherResult.name = element["main"];
            currentWeatherResult.description = element["description"];
            this.results.push(currentWeatherResult); 
          }
        );
        this.windDirection = result["wind"]["deg"];
        this.windSpeed = result["wind"]["speed"];
        this.temperature = result["main"]["temp"];

        },
        () => { 
        this.successfulQuery = false;
          alert("An error occured pulling the data!");
          }
    );
  }
}


