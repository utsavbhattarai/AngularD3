import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { throwError } from 'rxjs';
import { SharedService } from '../providers/shared/shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        transform: 'scale(0.5) translateX(-50%) translateY(-40%)'
      })),
      state('hide',   style({
        transform: 'scale(1)'
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class MapComponent implements OnInit {
  data: any;
  temp:any;
  state: any;
  allTempData: any;
  stateTemp: any;
  isClicked = false;
  apiValue: any;
  show = false;
  displayStateNameOnCardHeader: any;
  citiesShow = false;
  constructor(public _sharedService: SharedService) { }
  ngOnInit() {
    this.createMap();
    this.createCities("01");
  }

  createMap() {
      let newThis = this; //this will allow us to use angular components inside d3
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
              .attr('d', path).
              style("stroke", "red")
              .on('click', function(d, i) {
                //debugger;
                d3.select(this).attr('class', 'tooltip-donut')
                .style('opacity', 0.1)
                .style('opactiy', 1.0);
                //trigger animation
                newThis.show = true;
                //newThis.stateNameClicked = nameState[d.id];
                newThis.alertWithWeatherData(nameState[d.id]); //calling api
                newThis.createCities(d.id);
              })
              .on('mouseover', function(d, i) {
                console.log(d.id);
                newThis.displayStateNameOnCardHeader = nameState[d.id]
                return tooltip.style("visibility", "visible").text(nameState[d.id])
                .style("hover", 'silver')
                .style('margin-left', '37%')
                .style('font-size', '50px')
                .style('margin-top', '3%');
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
  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  alertWithWeatherData(state) {
    this._sharedService.getStateWeather(state).subscribe(res => {
      this.apiValue = res;
      this.isClicked = true;
      let message = "Temperature: "+(this.convertKtoF(res["main"].temp))+" F\n"+ '<br />' +
                    "<br />Max Temperature: "+ (this.convertKtoF(res['main'].temp_max))+' F\n <br>'+
                    '<br />Min Temperature: '+ (this.convertKtoF(res['main'].temp_min))+' F\n <br>'+
                    '<br />Sunrise: '+ (this.convertTimeStampToDate(res['sys'].sunrise))+'\n <br>'+
                    '<br />Sunset: '+ (this.convertTimeStampToDate(res['sys'].sunset))+'\n <br>';
      //window.alert(message);
      this.stateTemp = 'State: '+state+'\n <br>';
      this.allTempData = message;
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

  createCities(id:any) {
    this.citiesShow = true;
    let diameter = 400;
      debugger;
    let json = {
         1: {
            'children': [
            {'name': 'Birmingham', 'value': 70},
            {'name': 'Montgomery', 'value': 44},
            {'name': 'Mobile', 'value': 65},
            {'name': 'Huntsville', 'value': 39},
            {'name': 'Tuscaloosa', 'value': 20},
            {'name': 'Hoover', 'value': 25},
            {'name': 'Dothan', 'value': 40},
            {'name': 'Gadsden', 'value': 50},
            {'name': 'Decatur', 'value': 55},
            {'name': 'Auburn', 'value': 60},
            {'name': 'Madison', 'value': 55},
            {'name': 'AubFlorenceurn', 'value': 65},
          ]
        },
        2: {
          'children': [
            {'name': 'Anchorage', 'value': 10},
          ]
        },
        4: {
          'children': [
            {'name': 'Phoenix', 'value': 70},
            {'name': 'Tucson', 'value': 70},
            {'name': 'Mesa', 'value': 70},
            {'name': 'Chandler', 'value': 70},
            {'name': 'Glendale', 'value': 70},
            {'name': 'Scottsdale', 'value': 70},
            {'name': 'Gilbert', 'value': 70},
            {'name': 'Tempe', 'value': 70},
            {'name': 'Peoria', 'value': 70},
            {'name': 'Surprise', 'value': 70},
            {'name': 'Yuma', 'value': 70},
            {'name': 'Avondale', 'value': 70},
            {'name': 'Goodyear', 'value': 70},
            {'name': 'Flagstaff', 'value': 70},
          ]
        },
        5: {
          'children': [
            {'name': 'Little Rock', 'value': 70},
            {'name': 'Fort Smith', 'value': 70},
            {'name': 'Springdale', 'value': 80},
            {'name': 'Jonesboro', 'value': 70},
            {'name': 'Conway', 'value': 75},
            {'name': 'Rogers', 'value': 60},
            {'name': 'Bentonville', 'value': 60}
          ]
        },
        6: {
          'children': [
            {'name': 'Los Angeles', 'value': 50},
            {'name': 'San Diego', 'value': 70},
            {'name': 'San Jose', 'value': 55},
            {'name': 'San Francisco', 'value': 70},
            {'name': 'Sacramento', 'value': 55},
            {'name': 'Long Beach', 'value': 60},
            {'name': 'Stockton', 'value': 60}
          ]
        },
        8: {
          'children': [
            {'name': 'Denver', 'value': 70},
            {'name': 'Colorado Springs', 'value': 90},
            {'name': 'Aurora', 'value': 70},
            {'name': 'Lakewood', 'value': 70},
            {'name': 'Thornton', 'value': 70},
            {'name': 'Arvada', 'value': 70},
            {'name': 'Westminster', 'value': 70},
          ]
        },
        9: {
          'children': [
            {'name': 'Anchorage', 'value': 70},
          ]
        },
        10: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        11: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        12: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        13: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        14: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        15: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        16: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        17: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        18: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        19: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
        20: {
          children: [
            {name: 'Anchorage', value: 70},
          ]
        },
    }

    let colorScale = d3.scaleLinear()
      .domain([0, d3.max(json[Number(id)].children, function(d) {
        return d.value;
      })])
      .range(['rgb(46, 73, 123)', 'rgb(71, 187, 94)']);

    let bubble = d3.pack()
        .size([diameter, diameter])
        .padding(5);

    const margin = {
        left: 0,
        right: 100,
        top: 0,
        bottom: 0
      };
    d3.select('#chart').selectAll('svg').remove();
    let svg = d3.select('#chart').append('svg')
        .attr('viewBox','0 0 ' + (diameter + margin.right) + ' ' + diameter)
        .attr('width', (diameter + margin.right))
        .attr('height', diameter)
        .attr('class', 'chart-svg');

    let root = d3.hierarchy(json[Number(id)])
        .sum(function(d) { return d.value; })
        .sort(function(a, b) { return b.value - a.value; });

    bubble(root);

    let node = svg.selectAll('.node')
        .data(root.children)
        .enter()
        .append('g').attr('class', 'node')
        .attr('transform', function(d) { return 'translate(' + d.x + ' ' + d.y + ')'; })
        .append('g').attr('class', 'graph');

    node.append('circle')
        .attr('r', function(d) { return d.r; })
        .style('fill', '#0082a554');

    node.append('text')
        .attr('dy', '.3em')
        .style('text-anchor', 'middle')
        .text(function(d) { return d.data.name; })
        .style('fill', '#ff8484d9');
    node.exit()
        .transition()
        .attr('r', 0)
        .remove();
  }

}
