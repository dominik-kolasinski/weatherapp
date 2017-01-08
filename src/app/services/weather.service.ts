import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{
  http: any;
  apiKey: string;
  weatherUrl: string;
  searchCityUrl: string;

  constructor(http:Http){
    this.http = http;
    this.apiKey = '18d7954318a6a898';
    this.weatherUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    this.searchCityUrl = 'http://localhost:8100/search/aq?query=';
  }

  getWeather(zmw){
    return this.http.get(this.weatherUrl + '/zmw:' + zmw + '.json')
      .map(res => res.json());
  }

  searchCity(searchString){
    return this.http.get(this.searchCityUrl + searchString)
      .map(res => res.json());
  }

}
