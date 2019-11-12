import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, OnChanges {
  @Input() fiveDaysWeatherForecast: any;
  fiveDaysWeatherForecastJson: any;
  results: any = [
    // { name: 'Germany', value: 8940 },
    // { name: 'USA', value: 5000 },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;
  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    this.plotPieChart();
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      this.fiveDaysWeatherForecastJson = changes[propName];
    }
  }
  plotPieChart() {
    this.results = [...this.results];
    console.log(this.results);
      this.results.push({name: "Pressure",
        value: this.fiveDaysWeatherForecastJson.currentValue.list[0].main.pressure
    });
    this.results.push({name: "Humidity",
        value: this.fiveDaysWeatherForecastJson.currentValue.list[0].main.humidity
    });
    this.results.push({name: "Ground Level",
        value: this.fiveDaysWeatherForecastJson.currentValue.list[0].main.grnd_level
    });
      //this.multi[0].series.push({name: "2013", value: this.fiveDaysWeatherForecastJson.currentValue.list[5].main.temp});
      //this.multi[0].series.push({name: "2014", value: this.fiveDaysWeatherForecastJson.currentValue.list[14].main.temp});
      //this.multi[0].series.push({name: "2015", value: this.fiveDaysWeatherForecastJson.currentValue.list[24].main.temp});   
        //currentValue.list[0].main.humidity

  }

}
