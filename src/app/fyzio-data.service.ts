import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  BandData,
  RopeDataStatProf,
  BarometerData,
  RopeData,
  BarometerData2,
  RopeData2,
  BandData1,
  BandData2,
  ScaleDataStat, ScaleDataStatProf, WatchDataStat, BarometerDataStat
} from "./interfaces/main_interface";
import {AngularFireDatabase} from "@angular/fire/compat/database";
//import {AngularFireDatabase} from "@angular/fire/compat/database";
// import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
// import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class FyzioDataService {
 // 'https://console.firebase.google.com/project/physiosmart-64744/database/physiosmart-64744-default-rtdb/data/BarometerData'

//AIzaSyDr9EU9adHc6ICvSr75-2qbfHb1kOxKrEQ
   //urlBarometerData: string = 'http://localhost:3000/BarometerData';
  urlBarometerData: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/BarometerData.json';
  urlBarometerData2: string = 'http://localhost:3000/BarometerData2';
  //urlRopeData: string = 'http://localhost:3000/RopeData';
  urlRopeData: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/RopeData.json';
  urlRopeDataStatProf: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/RopeDataStatProf.json';
  urlRopeData2: string = 'http://localhost:3000/RopeData2';
  urlBandData1: string = 'http://localhost:3000/BandData1';
  urlBandData2: string = 'http://localhost:3000/BandData2';
  urlScaleDataStat: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/ScaleDataStat.json';
  urlScaleDataStatProf: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/ScaleDataStatProf.json';
  urlWatchDataStat: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/WatchDataStat.json';
  urlBaroDataStat: string = 'https://physiosmart-64744-default-rtdb.europe-west1.firebasedatabase.app/BarometerDataStat.json';

  //
  // urlScaleDataStat: string = 'http://localhost:3000/ScaleDataStat';
  // urlScaleDataStatProf: string = 'http://localhost:3000/ScaleDataStatProf';
  // urlWatchDataStat: string = 'http://localhost:3000/WatchDataStat';
  // urlBaroDataStat: string = 'http://localhost:3000/BarometerDataStat';

  private barometerDataRef = this.db2.list<BarometerData>('BarometerData');

  constructor(private http: HttpClient, private db2: AngularFireDatabase) { }
 // access_token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJsb2MgcndlaSByaHIgcm51dCByc2xlIiwiZXhwIjoxNzEyNDA4NzkxLCJpYXQiOjE2ODA4OTYzODd9.Lsxba2TjpE8PTvSEOBv336oh54aytQtA5QYsGLXOHvg"
  // access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJsb2MgcndlaSByaHIgcm51dCByc2xlIiwiZXhwIjoxNjgwODI5MDQ2LCJpYXQiOjE2ODA4MDAyNDZ9.8YXWWbx-IinCTf8sBzv68jazb1SzSk8Q98Et4T7YepA"
  access_token_watch = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhaM1IiLCJzdWIiOiJCOVRCN1IiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJociByYWN0IHJudXQiLCJleHAiOjE2ODAxNDcwNjEsImlhdCI6MTY4MDExODI2MX0.gM9nV3thBGSByBhwVL6iNu0KqUuJQQtAdim3Ln6x_hU"

  access_token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJsb2MgcndlaSByaHIgcm51dCByc2xlIiwiZXhwIjoxNzEyNDA4NzkxLCJpYXQiOjE2ODA4OTYzODd9.Lsxba2TjpE8PTvSEOBv336oh54aytQtA5QYsGLXOHvg"

  requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };

  getBandData(): Observable<any>{
    return  this.http.get<any>(	'https://api.fitbit.com/1.2/user/B8HP4Z/sleep/date/2022-11-01/2023-01-10.json', this.requestOptions)
  }

  requestOptions_watch = {
    headers: {"Authorization": "Bearer " + this.access_token_watch}
  };

  requestOptions_scale = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };


getData3():Observable<BarometerData[]>{

  console.log('getBarometerData(): Getting data from Firebase Realtime Database.');
  return this.barometerDataRef.valueChanges();
}

  getData2(){
    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions)
  }


  getBarometerData5(): Observable<BarometerData[]>{
    console.log("tlakomer data"+this.urlBarometerData);
    return this.http.get<BarometerData[]>(this.urlBarometerData);
    console.log("tlakomer data"+this.urlBarometerData);

  }



  getBandData6(): Observable<any>{
    return  this.http.get<any>(	'https://api.fitbit.com/1.2/user/B8HP4Z/sleep/date/2022-11-01/2023-01-10.json', this.requestOptions)
    // return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-19/2022-12-20.json', this.requestOptions);
  }
  getBandData01(): Observable<any>{
    return  this.http.get<any>(	'https://api.fitbit.com/1.2/user/B8HP4Z/sleep/date/2023-01-11/2023-04-10.json', this.requestOptions)
    // return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-19/2022-12-20.json', this.requestOptions);
  }
  getWatchData():Observable<any> {
    // return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/activities/heart/date/2022-12-18/2023-04-10.json', this.requestOptions_watch);
    return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2023-03-27/2023-03-31.json', this.requestOptions);
  }
  getWatchData01():Observable<any> {
    return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/activities/heart/date/2022-12-18/2023-02-03.json', this.requestOptions_watch);
  }
  getScaleData():Observable<any>{
    return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/body/log/weight/date/2023-01-25/2023-02-25.json', this.requestOptions_scale);
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


  getRopeDataStatProf(): Observable<RopeDataStatProf[]>{
    return this.http.get<RopeDataStatProf[]>(this.urlRopeDataStatProf)
  }
getScaleDataStat(): Observable<ScaleDataStat[]>{
  return this.http.get<ScaleDataStat[]>(this.urlScaleDataStat)
}
  getScaleDataStatProf(): Observable<ScaleDataStatProf[]>{
    return this.http.get<ScaleDataStatProf[]>(this.urlScaleDataStatProf)
  }
  getWatchDataStat(): Observable<WatchDataStat[]>{
    return this.http.get<WatchDataStat[]>(this.urlWatchDataStat)
  }
  getBaroDataStat(): Observable<BarometerDataStat[]>{
    return this.http.get<BarometerDataStat[]>(this.urlBaroDataStat)
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
