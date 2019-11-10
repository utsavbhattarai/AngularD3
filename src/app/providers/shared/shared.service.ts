import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiKey : string = '001b0f58045147663b1ea518d34d88b4';
  //apiKey : string = '8126d8d0baf22fae2d282765492d4702';
  //001b0f58045147663b1ea518d34d88b4 

  json = {
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
       {name: 'Des Moines', value: 70},
       {name: 'Cedar Rapids', value: 70},
       {name: 'Davenport', value: 70},
       {name: 'Sioux City', value: 70},
       {name: 'Iowa City', value: 70},
       {name: 'Dubuque', value: 70},
     ]
   },
   20: {
    children: [
      {name: 'Wichita', value: 70},
      {name: 'Overland Park', value: 70},
      {name: 'Kansas City', value: 70},
      {name: 'Olathe', value: 70},
      {name: 'Lawrence', value: 70},
      {name: 'Shawnee', value: 70},
      {name: 'Manhattan', value: 70},
    ]
   },
   22: {
    children: [
      {name: 'New Orleans', value: 70},
      {name: 'Baton Rouge', value: 70},
      {name: 'Shreveport', value: 70},
      {name: 'Lafayette', value: 70},
      {name: 'Lake Charles', value: 60},
      {name: 'Hammond', value: 40},
      {name: 'Monroe', value: 37},
      {name: 'Alexandria', value:47},
      {name: 'Kenner', value: 34},

    ]
  },
  27: {
    children: [
      {name: 'Minneapolis', value: 70},
      {name: 'St. Paul', value: 70},
      {name: 'Rochester', value: 70},
      {name: 'Duluth', value: 70},
      {name: 'Bloomington', value: 70},
      {name: 'Brooklyn Park', value: 70},
      {name: 'St. Cloud', value: 70},
    ]
  },
  29: {
    children: [
      {name: 'Kansas City', value: 70},
      {name: 'St. Louis', value: 70},
      {name: 'Springfield', value: 70},
      {name: 'Independence', value: 70},
      {name: 'Columbia', value: 70},
      {name: 'Florissant', value: 70},
    ]
  },
   48: {
    children: [
      {name: 'Houston', value: 70},
      {name: 'San Antonio', value: 70},
      {name: 'Dallas', value: 70},
      {name: 'Austin', value: 70},
      {name: 'Fort Worth', value: 70},
      {name: 'El Paso', value: 65},
      {name: 'Arlington', value: 61},
      {name: 'Plano', value: 50},
      {name: 'Irving', value: 30},
      {name: 'Denton', value: 40},
      {name: 'Frisco', value: 50},
    ]
   },
   40: {
    children: [
      {name: 'Oklahoma City', value: 70},
      {name: 'Tulsa', value: 70},
      {name: 'Norman', value: 70},
      {name: 'Broken Arrow', value: 70},
      {name: 'Lawton', value: 70},
    ]
   },
   31: {
    children: [
      {name: 'Omaha', value: 70},
      {name: 'Lincoln', value: 70},
      {name: 'Bellevue', value: 70},
      {name: 'Grand Island', value: 70}, 
    ]
   },
   46: {
    children: [
      {name: 'Sioux Falls', value: 70},
      {name: 'Rapid City', value: 70},
    ]
   },
   38: {
    children: [
      {name: 'Fargo', value: 70},
      {name: 'Bismarck', value: 70},
      {name: 'Grand Forks', value: 70},
      {name: 'Minot', value: 70}, 
    ]
   },
      35: {
        children: [
          {name: 'Albuquerque', value: 70},
          {name: 'Las Cruces', value: 70},
          {name: 'Rio Rancho', value: 70},
          {name: 'Santa Fe', value: 70}, 
     {name: 'Roswell', value: 70}, 
    {name: 'Farmington', value: 70}, 
        ]
       },
       56: {
          children: [
            {name: 'Cheyenne', value: 70},
            {name: 'Casper', value: 70},
         
          ]
         }, 
      30: {
            children: [
              {name: 'Billings', value: 70},
              {name: 'Missoula', value: 70},
              {name: 'Great Falls', value: 70},
              {name: 'Bozeman', value: 70}, 
            ]
           },  
         49: {
              children: [
                {name: 'Salt Lake City', value: 110},
                {name: 'West Valley City', value: 110},
                {name: 'Provo', value: 70},
                {name: 'West Jordan', value: 90}, 
          {name: 'Orem', value: 70},
                {name: 'Sandy', value: 70},
                {name: 'Ogden', value: 70},
                {name: 'St. George', value: 70}, 
              ]
             },  
           16: {
                children: [
                  {name: 'Boise City', value: 70},
                  {name: 'Nampa', value: 70},
                  {name: 'Meridian', value: 70},
                  {name: 'Idaho Falls', value: 90}, 
            {name: 'Pocatello', value: 70},
                  {name: 'Caldwell', value: 70},
                  {name: 'Twin Falls', value: 70}, 
                ]
               },    
             32: {
                  children: [
                    {name: 'Las Vegas', value: 70},
                    {name: 'Henderson', value: 70},
                    {name: ' Reno', value: 70},
                    {name: 'North Las Vegas', value: 100}, 
               {name: 'Sparks', value: 70},
                    {name: 'Carson City', value: 70},
                  ]
                 }, 
                41: {
                    children: [
                      {name: 'Portland', value: 70},
                      {name: 'Eugene', value: 70},
                      {name: 'Salem', value: 70}, 
                {name: 'Gresham', value: 70},
                      {name: 'Hillsboro', value: 70},
                      {name: 'Beaverton', value: 70}, 
                {name: 'Bend', value: 70},
                      {name: 'Medford', value: 70},
                      {name: 'Springfield', value: 70}, 
                    ]
                   },  
                 53: {
                      children: [
                        {name: 'Seattle', value: 70},
                        {name: 'Spokane', value: 70},
                        {name: 'Tacoma', value: 70},
                        {name: 'Vancouver', value: 70}, 
                    {name: 'Bellevue', value: 70},
                        {name: 'Kent', value: 70}, 
                  {name: 'Everett', value: 70},
                        {name: 'Renton', value: 70},
                        {name: 'Yakima', value: 70}, 
                  {name: 'Federal Way', value: 90},
                        {name: 'Auburn', value: 70},
                        {name: 'Pasco', value: 70}, 
                      ]
                     },  
                   2: {
                        children: [
                          {name: 'Anchorage', value: 70},
                    {name: 'Juneau', value: 70},
                    {name: 'Fairbanks', value: 70},
                    {name: 'Eagle River', value: 70},
                   
                       
                        ]
                       },    
                     15: {
                          children: [
                            {name: 'Honolulu', value: 70},
                            {name: 'Pearl City', value: 70},
                            {name: 'Hilo', value: 70},
                            {name: 'Waipahu', value: 70}, 
                          ]
                         },

};
  
  constructor(public http: HttpClient) { }

  getUserWeather(lat,lon){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&mode=json&appid='+this.apiKey);
  }

  getStateWeather(state){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+state+'&mode=json&appid='+this.apiKey);
  }

  getJson(){
    return this.json;
  }


}
