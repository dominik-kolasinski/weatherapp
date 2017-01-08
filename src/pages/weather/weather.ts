import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from "../../app/services/weather.service";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather: any;
  citySearchString: string;
  results: any;
  zmw: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
  }

  ngOnInit(){
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      })
  }

  getDefaultCity(){
    if(localStorage.getItem('city') !== null){
      this.zmw = JSON.parse(localStorage.getItem('city')).zmw;
    }else{
      this.zmw = '10001.11.99999';
    }
  }

  getQuery(){
    this.weatherService.searchCity(this.citySearchString)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  selectCity(selectedCity){
    this.results = [];
    this.weatherService.getWeather(selectedCity.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }
}
