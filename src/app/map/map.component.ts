import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { throwError } from 'rxjs';
import { SharedService } from '../providers/shared/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  data: any;
  temp:any;
  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
    this.createMap();
  }

  createMap() {
      var newThis = this; //this will allow us to use angular components inside d3
      const svg = d3.select('svg');
      const nameState = {};
      const path = d3.geoPath();
      let tooltip = d3.select("#tool")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      /* .text(nameState); */
      d3.json('https://d3js.org/us-10m.v1.json').then((us) => {
          const data = topojson.feature(us, us.objects.states).features;
          d3.tsv('../../assets/us-state-names.tsv').then((tsv) => {
            // extract just the names and Ids
            const names = {};
            tsv.forEach(function(d, i) {
              names[d.id] = d.code;
              nameState[d.id] = d.name;
              //debugger
            });
            svg.append('g')
            .attr('class', 'states')
            .selectAll('path')
            .data(data)
            .enter().append('path')
              .attr('d', path)
              .on('click', function(d, i) {
                //debugger;
                d3.select(this).attr('class', 'tooltip-donut')
                .style('opacity', 0.1);
                //alert(nameState[d.id]);
                newThis.alertWithWeatherData(nameState[d.id]); //calling api 
                console.log(nameState[d.id])
              })
              .on('mouseover', function(d, i) {
                console.log(d.id);
                return tooltip.style("visibility", "visible").text(nameState[d.id]);
                //alert(i);
              });
            svg.append('path')
              .attr('class', 'state-borders')
              .attr('d', path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })))
              .style('fill', 'none')
              .style('stroke', 'silver')
              .style('stroke-width', '1.0px')
              .style('stroke-linejoin', 'round')
              .style('stroke-linecap', 'round')
              .style('pointer-events', 'none');
            svg.append('g')
              .attr('class', 'states-names')
              .selectAll('text')
              .data(data);
      });
      }).catch((error) => {
          throwError;
        });

  }

  alertWithWeatherData(state){
    this._sharedService.getStateWeather(state).subscribe(res => {
      console.log(res);
      let message = "State: "+state+"\n"+
                    "Temperature: "+(this.convertKtoF(res["main"].temp))+" F\n"+
                    "Max Temperature: "+ (this.convertKtoF(res["main"].temp_max))+" F\n"+
                    "Min Temperature: "+ (this.convertKtoF(res["main"].temp_min))+" F\n"+
                    "Sunrise: "+ (this.convertTimeStampToDate(res["sys"].sunrise))+"\n"+
                    "Sunset: "+ (this.convertTimeStampToDate(res["sys"].sunset))+"\n"
                    ;
      window.alert(message);
    }, error => {
      window.alert('Not found! Please try again later');
    });
  }

  convertKtoF(K){
    return (((K-273.15)*1.8)+32).toFixed(2);
  }

  convertTimeStampToDate(timesStamp){
    return new Date(timesStamp*1000).toLocaleTimeString();
  }

}
