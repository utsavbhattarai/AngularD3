import { Component, OnChanges, Input, SimpleChange, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../providers/shared/shared.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.scss']
})
export class ForecastGraphComponent implements OnChanges, OnDestroy, OnInit {
  @Input() fiveDaysWeatherForecast: any;
  fiveDaysWeatherForecastJson: any;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature';
  colorScheme: any;
  themeSubscription: any;

  multi: any = [
    {
      name: '',
      series: [
        // {
        //   name: '2010',
        //   value: 20
        // },
      ],
    },
  ];

  constructor(public _sharedService: SharedService, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: ['#DC143C', '#A10A28', '#C7B42C', '#AAAAAA'],
      };
    });

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      this.fiveDaysWeatherForecastJson = changes[propName];
    }
  }
  ngOnInit() {
    this.PlotGraph();
  }

  PlotGraph() {
    this.multi = [...this.multi];
    this.multi[0].name = this.fiveDaysWeatherForecastJson.currentValue.city.name;
    for(let i=0; i<40; i++){
      this.multi[0].series.push({name: this.fiveDaysWeatherForecastJson.currentValue.list[i].dt_txt.slice(5,16), 
        value: this.convertKtoF(this.fiveDaysWeatherForecastJson.currentValue.list[i].main.temp), 
        max: this.convertKtoF(this.fiveDaysWeatherForecastJson.currentValue.list[i].main.temp_max)});
      //this.multi[0].series.push({name: "2013", value: this.fiveDaysWeatherForecastJson.currentValue.list[5].main.temp});
      //this.multi[0].series.push({name: "2014", value: this.fiveDaysWeatherForecastJson.currentValue.list[14].main.temp});
      //this.multi[0].series.push({name: "2015", value: this.fiveDaysWeatherForecastJson.currentValue.list[24].main.temp});   
    }
      console.log(this.fiveDaysWeatherForecastJson);
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  convertKtoF(K){
    return (((K-273.15)*1.8)+32).toFixed(2);
  }

}
