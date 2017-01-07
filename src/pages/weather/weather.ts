import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from "../../app/services/weather.service";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: string;
  state: string;
  weather: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.city = 'Warszawa';
    this.state = 'PL';
  }

  ngOnInit(){
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      })
  }

}
