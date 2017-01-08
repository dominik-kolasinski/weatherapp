import { Component } from '@angular/core';
import { WeatherService } from '../../app/services/weather.service';
import { NavController } from 'ionic-angular';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  citySearchString: string;
  results: any;
  defaultCity: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit(){
    this.getDefaultCity();
  }

  getQuery(){
    this.weatherService.searchCity(this.citySearchString)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  getDefaultCity(){
    if(localStorage.getItem('city') !== null){
      this.defaultCity = JSON.parse(localStorage.getItem('city')).name;
    }else{
      this.defaultCity = '10001.11.99999';
    }
  }

  setDefaultCity(city){
    this.results = [];

    localStorage.setItem('city', JSON.stringify(city));
    this.citySearchString = city.name;
  }

  setAsDefault(){
    this.navCtrl.push(WeatherPage);
  }

}
