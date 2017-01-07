import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{
  http: any;
  apiKey: String;
  weatherUrl: String;

  constructor(http:Http){
    this.http = http;
    this.apiKey = '18d7954318a6a898';
    this.weatherUrl= 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
  }

  getWeather(city, state){
    return this.http.get(this.weatherUrl + state + '/' + city + '.json')
      .map(res => res.json());
  }

}
