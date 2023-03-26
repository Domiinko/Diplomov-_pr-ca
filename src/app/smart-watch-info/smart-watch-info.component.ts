import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {FyzioDataService} from "../fyzio-data.service";
import { map, take} from "rxjs";
import {BandData, BarometerData} from '../interfaces/main_interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as moment from "moment/moment";
import {Chart} from "chart.js";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-smart-watch-info',
  templateUrl: './smart-watch-info.component.html',
  styleUrls: ['./smart-watch-info.component.css']
})
export class SmartWatchInfoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  private watchActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly watchActivitiesData$: Observable<any> =this.watchActivitiesData$$.asObservable();

  private watchActivitiesData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly watchActivitiesData01$: Observable<any> =this.watchActivitiesData01$$.asObservable();
  currentUser: string | null = null;
  public array= [];
  constructor(private fyzioDataService: FyzioDataService, private auth : AuthService) { }

  ngOnInit(): void {
    this.fyzioDataService.getWatchData().subscribe((result: any) => {
      console.log(result);
      this.watchActivitiesData$$.next(result);
      this.array = result;
    });
    this.fyzioDataService.getWatchData01().subscribe((result: any) => {
      console.log(result);
      this.watchActivitiesData01$$.next(result);
      this.array = result;
    });

    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if (this.currentUser && this.currentUser === 'e2FZnn962YZQW23c59eLTzlHPSl1') {
        combineLatest([
          this.fyzioDataService.getWatchData().pipe(
            map((data: any) => data['activities-heart'].map((item: any) => item.value.restingHeartRate))
          ),
          this.fyzioDataService.getWatchData().pipe(
            map((data: any) => data['activities-heart'].map((item: any) => ({
              dateTime: moment(item.dateTime, 'YYYY-MM-DD'),
              value: item.value.restingHeartRate
            })))
          )
        ]).subscribe(([tep, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              // using moment.js to format dates in 'DD-MM-YYYY' format
              labels: dates.map((d: any) => d.dateTime.format('DD-MM-YYYY')),
              datasets: [{
                label: 'tep',
                data: tep,
                borderWidth: 1
              }]
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

      }
      if (this.currentUser && this.currentUser === '5o6uneDu0KbLOWC2RSzIYSt9Aa43') {
        combineLatest([
          // mapping data to extract resting heart rate values
          this.fyzioDataService.getWatchData01().pipe(
            map((data: any) => data['activities-heart'].map((item: any) => item.value.restingHeartRate))
          ),
          // mapping data to extract date-time and resting heart rate values as objects
          this.fyzioDataService.getWatchData01().pipe(
            map((data: any) => data['activities-heart'].map((item: any) => ({
              dateTime: moment(item.dateTime, 'YYYY-MM-DD'),
              value: item.value.restingHeartRate
            })))
          )
        ]).subscribe(([tep, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              // using moment.js to format dates in 'DD-MM-YYYY' format
              labels: dates.map((d: any) => d.dateTime.format('DD-MM-YYYY')),
              datasets: [{
                label: 'tep',
                data: tep,
                borderWidth: 1
              }]
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
      } else {

      }
    });


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


  fileDownloadCSV() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Smart Watch Results',
      useBom: true,
      noDownload: false,
      headers: ["Date", "Systolicky", "Diastolicky"]
    };

  }
  public isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}
