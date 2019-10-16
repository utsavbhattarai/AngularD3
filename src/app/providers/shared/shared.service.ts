import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiKey : string = '001b0f58045147663b1ea518d34d88b4';
  //apiKey : string = '8126d8d0baf22fae2d282765492d4702';
  //001b0f58045147663b1ea518d34d88b4 
  constructor(public http: HttpClient) { }

  getUserWeather(lat,lon){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&mode=json&appid='+this.apiKey);
  }

  getStateWeather(state){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+state+'&mode=json&appid='+this.apiKey);
  }
}
