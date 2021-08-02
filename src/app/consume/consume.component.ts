import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class ConsumeComponent implements OnInit {

  apiURL1 = 'https://price-broadcaster-backend.dev.gke.papers.tech/api/observations/';
  apiURL2 = 'https://price-broadcaster-backend.dev.gke.papers.tech/api/devices/';

  certificates:any;
  last_attestation:any;
  last_attestation_timestamp:any;
  currentHour:any;
  currentMin:any;
  calcTime:any;
  name:any;
  timestamp:any;
  last_price_update_hour:any;
  last_price_update_min:any;
  last_price_update_time:any;
  price_feeds:any;
  dropActive:any;
  deviceArrays:any;
  deviceName:any;
  ticks:any;
  result2:any;
  compareHour:any;
  compareMin:any;
  lastPrice:any;

  constructor() {

    this.dropActive = false;
    this.deviceArrays = new Array();
    this.price_feeds = new Array();
    this.deviceName = new Array();
    this.ticks = new Array();
    this.calcTime = new Array();
    this.lastPrice = new Array();

  }

  changeActive=()=>{

    if(this.dropActive == false){
      console.log("down");
      this.dropActive = true;
    }
    else{
      console.log("up");
      this.dropActive = false;
    }
  }

  ngOnInit(): void {
    axios.get(this.apiURL1)
    .then((res1) => {

      console.log(res1)

      this.currentHour = new Date().toISOString().split('T')[1].split(':')[0];
      this.currentMin = new Date().toISOString().split('T')[1].split(':')[1];

      this.timestamp = res1.data.results[0].prices[0].timestamp;
      this.last_price_update_hour = this.timestamp.split('T')[1].split(':')[0];
      this.last_price_update_min = this.timestamp.split('T')[1].split(':')[1];
      this.last_price_update_time = (this.currentHour - this.last_price_update_hour<0?(24+(this.currentHour - this.last_price_update_hour)):(this.currentHour - this.last_price_update_hour))
      + " h " + 
      (this.currentMin - this.last_price_update_min<0?(60+(this.currentMin - this.last_price_update_min)):(this.currentMin - this.last_price_update_min) + " mins")
     

      for (let res of res1.data.results){

          if(res.device == 'p2pk658A3esUz7S6jh2q5jHf3eSdzWVWejYCHX89DyVarCSe8VCzwx8'){
            for(let count of res.prices){
              this.deviceName.push('Taurus 2');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk65NubsWBUjnmykLGSp7pQWDoVJJ4G6xWo5Yvv9Y5obVcrAmVBGx'){
            for(let count of res.prices){
              this.deviceName.push('Sygnum 1');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk66AE66JwiBL4RkKT8S6uzuoPsmNZkrsB97JkPx2CCJ6nJwe8HUL'){
            for(let count of res.prices){
              this.deviceName.push('Sygnum 2');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk65k2pwoPzPE4JWUqGsuXZFu57M3m9VwGS9Y6KDLuW8jE9c2uysW'){
            for(let count of res.prices){
              this.deviceName.push('Bitcoin Suisse 1');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk674huMxpo9g9PjpGVJ6xhYn2oizSsA8AnZdioggbBwfXdEYuZxW'){
            for(let count of res.prices){
              this.deviceName.push('Bitcoin Suisse 2');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk67vpbMa8KJBJMVpSjs7eVHdcokaV1623pz4xKNMPdUaMVPH9Nks'){
            for(let count of res.prices){
              this.deviceName.push('');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk64n4vUKmdRJifUdt15z1TPS4UQPdfiArH82YgBpr2WvNDsqpFw9'){
            for(let count of res.prices){
              this.deviceName.push('Ubinetic Dev 1');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk65RZJxcF4ujZEbupzUjFfbxMNivL2c5SNkqvZtbBWEtUT9aP59Y'){
            for(let count of res.prices){
              this.deviceName.push('Taurus 1');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk65rBrV6q45863PJLrYQxCgP98wPfQq9KQkWcsUkLcqy9xvXi19M'){
            for(let count of res.prices){
              this.deviceName.push('');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk68G2ZHsrqMvntH5GuLhHoReYN7NqYj4PKHMeMDExasuSpV8Hc6x'){
            for(let count of res.prices){
              this.deviceName.push('pascal');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }
          else if(res.device == 'p2pk66kvkYRdEi2KCc9dt3TjmgAjkH5GvpN9ABbKhhffYWdiqSvAb55'){
            for(let count of res.prices){
              this.deviceName.push('pascal');
            }
            this.lastPrice.push(
              (this.currentHour-res.prices[0].timestamp.split('T')[1].split(':')[0])
               + " h " + 
              (this.currentMin-res.prices[0].timestamp.split('T')[1].split(':')[1])
              + " min "
            )
          }

          console.log(this.lastPrice)
                  
          for(let result of res.prices){
              this.price_feeds.push(result);
          }
      }

    })
    .catch((error) => {
      console.error(error);
    });

    axios.get(this.apiURL2)
    .then((res2) => {

      console.log(res2);


      this.currentHour = new Date().toISOString().split('T')[1].split(':')[0];
      this.currentMin = new Date().toISOString().split('T')[1].split(':')[1];

      
      for(let res of res2.data.results){
        
         this.compareHour = res.last_attestation_timestamp?res.last_attestation_timestamp.split('T')[1].split(':')[0]:0;
         this.compareMin = res.last_attestation_timestamp?res.last_attestation_timestamp.split('T')[1].split(':')[1]:0;
         this.calcTime.push(
           (this.currentHour - this.compareHour<0?(24+(this.currentHour - this.compareHour)):(this.currentHour - this.compareHour))
           + " h " + 
           (this.currentMin - this.compareMin<0?(60+(this.currentMin - this.compareMin)):(this.currentMin - this.compareMin) + " mins")
          );
      }
      
      this.result2 = res2.data.results;
      for (let observation_history_in_time of this.result2){
        this.ticks.push(observation_history_in_time.observation_history_in_time);
      }

      for (let result of res2.data.results){
        this.deviceArrays.push(result)
      }
      
      
      

    })
    .catch((error) => {
      console.error(error);
    });
  }
}
