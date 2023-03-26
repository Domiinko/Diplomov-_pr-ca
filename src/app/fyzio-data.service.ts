import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import {BandData, BarometerData, RopeData, BarometerData2, RopeData2, BandData1, BandData2} from "./interfaces/main_interface";


@Injectable({
  providedIn: 'root'
})
export class FyzioDataService {

  urlBarometerData: string = 'http://localhost:3000/BarometerData';
  urlBarometerData2: string = 'http://localhost:3000/BarometerData2';
  urlRopeData: string = 'http://localhost:3000/RopeData';
  urlRopeData2: string = 'http://localhost:3000/RopeData2';
  urlBandData1: string = 'http://localhost:3000/BandData1';
  urlBandData2: string = 'http://localhost:3000/BandData2';
  constructor(private http: HttpClient) { }

  access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJsb2MgcndlaSByaHIgcm51dCByc2xlIiwiZXhwIjoxNjc5ODgyMTQ1LCJpYXQiOjE2Nzk4NTMzNDV9.Hk2rvmTZwVzyRB3brzPVSHraIjzgIID3nPVsm5BmvvY"
  access_token_watch = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhaM1IiLCJzdWIiOiJCOVRCN1IiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJhY3QgcmhyIHJudXQiLCJleHAiOjE2Nzk4NzAxODUsImlhdCI6MTY3OTg0MTM4NX0.dEirOs3qIM6_Wqh8PGrMV8GsFVZqzEaxWyGXEQay_ys"

  requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };
  requestOptions_watch = {
    headers: {"Authorization": "Bearer " + this.access_token_watch}
  };

  requestOptions_scale = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };

  getData2(){
    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions)
  }

  getBandData(): Observable<any>{
    return  this.http.get<any>(	'https://api.fitbit.com/1.2/user/B8HP4Z/sleep/date/2022-11-01/2023-01-10.json', this.requestOptions)
    // return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-19/2022-12-20.json', this.requestOptions);
  }
  getBandData01(): Observable<any>{
    return  this.http.get<any>(	'https://api.fitbit.com/1.2/user/B8HP4Z/sleep/date/2023-01-11/2023-04-10.json', this.requestOptions)
    // return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-19/2022-12-20.json', this.requestOptions);
  }
  getWatchData():Observable<any> {
    return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/activities/heart/date/2022-12-18/2022-12-20.json', this.requestOptions_watch);
  }
  getWatchData01():Observable<any> {
    return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/activities/heart/date/2022-12-18/2023-02-03.json', this.requestOptions_watch);
  }
  getScaleData():Observable<any>{
    return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/body/log/weight/date/2023-01-25.json', this.requestOptions_scale);
  }
  getScaleData01():Observable<any>{
    return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/body/log/weight/date/2023-01-25.json', this.requestOptions_scale);
  }
  getBarometersdfsData():Observable<any>{
    return this.http.get<any>('', this.requestOptions);
  }


  getWatchData1(): Observable<BarometerData[]>{
    return this.http.get<BarometerData[]>(this.urlBarometerData)
  }
  getWatchData2(): Observable<BarometerData[]>{
    return this.http.get<BarometerData[]>(this.urlBarometerData)
  }
  getBandData1(): Observable<BandData1[]>{
    return this.http.get<BandData1[]>(this.urlBandData1)
  }
  getBandData2(): Observable<BandData2[]>{
    return this.http.get<BandData2[]>(this.urlBandData2)
  }

  getBarometerData(): Observable<BarometerData[]>{
    return this.http.get<BarometerData[]>(this.urlBarometerData)
  }
  getBarometerData2(): Observable<BarometerData2[]>{
    return this.http.get<BarometerData2[]>(this.urlBarometerData2)
  }
  getRopeData(): Observable<RopeData[]>{
    return this.http.get<RopeData[]>(this.urlRopeData)
  }
  getRopeData2(): Observable<RopeData2[]>{
    return this.http.get<RopeData2[]>(this.urlRopeData2)
  }








}

/*
    fetch('https://api.fitbit.com/1/user/-/activities.json', {
      method: "GET",
      headers: {"Authorization": "Bearer " + access_token}
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
 */
