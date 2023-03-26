import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {FyzioDataService} from "../fyzio-data.service";
import { map, take} from "rxjs";
import {BandData, BarometerData} from '../interfaces/main_interface';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {AuthService} from "../shared/auth.service";
import * as moment from "moment";
// import {Chart} from "chart.js/dist/types";
import {Chart} from "chart.js";

@Component({
  selector: 'app-smart-band-info',
  templateUrl: './smart-band-info.component.html',
  styleUrls: ['./smart-band-info.component.css']
})
export class SmartBandInfoComponent implements OnInit {

  private bandActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData$: Observable<any> =this.bandActivitiesData$$.asObservable();

  private bandActivitiesData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData01$: Observable<any> =this.bandActivitiesData01$$.asObservable();

  constructor(private fyzioDataService: FyzioDataService, private auth : AuthService) { }
  currentUser: string | null = null;
  ngOnInit(): void {

    // this.fyzioDataService.getBandData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.bandActivitiesData$$.next(result);
    // });

    this.fyzioDataService.getBandData().subscribe((result: any)=>{
      console.log(result+"NEJDE TO MORE");
      this.bandActivitiesData$$.next(result);
    });

    this.fyzioDataService.getBandData01().subscribe((result: any)=>{
      console.log(result);
      this.bandActivitiesData01$$.next(result);
    });


    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if(this.currentUser && this.currentUser=== 'e2FZnn962YZQW23c59eLTzlHPSl1'){
        combineLatest([
          this.fyzioDataService.getBandData().pipe(map((data: any) => data['sleep'].map((item: any) => item.duration))),
          this.fyzioDataService.getBandData().pipe(map((data: any) => data['sleep'].map((item: any) => item.efficiency))),
          this.fyzioDataService.getBandData().pipe(map((data: any)  => data['sleep'].map((item: any) => ({
            dateOfSleep: moment(item.dateOfSleep, 'DD-MM-YYYY'),
            duration: item.duration,
            efficiency: item.efficiency,

          }))))
        ]).subscribe(([duration1, efficiency1, dateOfSleep1]) => {
          console.log("Vysledky" + dateOfSleep1);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: dateOfSleep1.map((d:any) => d.dateOfSleep.format('YYYY-MM-DD')),
              datasets: [{
                label: 'Dĺžka spánku',
                data: duration1,
                borderWidth: 1
              },
                {
                  label: 'Efektívnosť',
                  data: efficiency1,
                  borderWidth: 1
                }
              ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        });
      }if(this.currentUser && this.currentUser=== '5o6uneDu0KbLOWC2RSzIYSt9Aa43'){
        combineLatest([
         // this.fyzioDataService.getWatchData().pipe(map((data: any) => data['activities-heart'].map((item: any) => item.value.restingHeartRate))),
          this.fyzioDataService.getBandData01().pipe(map((data: any) => data['sleep'].map((item: any) => item.duration))),
          this.fyzioDataService.getBandData01().pipe(map((data: any) => data['sleep'].map((item: any) => item.efficiency))),
          this.fyzioDataService.getBandData01().pipe(map((data: any)  => data['sleep'].map((item: any) => ({
            dateOfSleep: moment(item.dateOfSleep, 'DD-MM-YYYY'),
            duration: item.duration,
            efficiency: item.efficiency,

          }))))
        ]).subscribe(([duration, efficiency, date]) => {
          console.log("Vysledky", date);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: date.map((d:any) => d.dateOfSleep.format('DD-MM-YYYY')),
              datasets: [{
                label: 'Dĺžka spánku',
                data: duration,
                borderWidth: 1
              },
                {
                  label: 'Efektívnosť',
                  data: efficiency,
                  borderWidth: 1
                }
              ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        });
      }else{

      }
    });














    // combineLatest([
    //   // mapping data to extract resting heart rate values
    //   this.fyzioDataService.getWatchData().pipe(
    //     map((data: any[]) => data.map(item => item?.['activities-heart']?.['value']?.restingHeartRate))
    //   ),
    //   // mapping data to extract date-time and resting heart rate values as objects
    //   this.fyzioDataService.getWatchData().pipe(
    //     map((data: any[]) => data.map(item => ({
    //       dateTime: moment(item.date, 'DD-MM-YYYY'),
    //       value: item?.['activities-heart']?.['value']?.restingHeartRate,
    //     })))
    //   )
    // ]).subscribe(([tep, dates]) => {
    //   console.log("Vysledky", dates);
    //
    //   new Chart('myChart', {
    //     type: 'line',
    //     data: {
    //       // using moment.js to format dates in 'DD-MM-YYYY' format
    //       labels: dates.map(d => d.dateTime.format('DD-MM-YYYY')),
    //       datasets: [{
    //         label: 'tep',
    //         data: tep,
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });
    // });
    //






  }
  public isLoggedIn() {

    // return this.isLoggin=true;
    return this.auth.isLoggedIn();
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}
