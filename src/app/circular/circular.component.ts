import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { reject } from 'q';
import { SharedService } from '../providers/shared/shared.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {
  lat:number;
  lon:number;
  userLocationData:any;
  errorMessage:any;
  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
    this.getCurrentUserLocation();
  }

  getCurrentUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(res => {
        this.lat = res.coords.latitude;
        this.lon = res.coords.longitude;
        console.log(this.lat +" "+this.lon);
        this._sharedService.getUserWeather(this.lat,this.lon).subscribe(res => {
          this.userLocationData = res;
          console.log(this.userLocationData);
        },error => {
          this.errorMessage = error.message;
        });
      },error => {
        this.errorMessage = error.message;
      });
    }
  }

  convertKtoF(K){
    return (((K-273.15)*1.8)+32).toFixed(2);
  }

  convertTimeStampToDate(timesStamp){
    return new Date(timesStamp*1000).toLocaleTimeString();
  }
  
}
