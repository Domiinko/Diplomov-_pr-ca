import { Component, OnInit } from '@angular/core';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {async, BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {FyzioDataService} from "../fyzio-data.service";
import {BarometerData, BarometerData2} from "../interfaces/main_interface";
import { Chart } from "node_modules/chart.js";
import * as moment from 'moment';
import { LoginComponent } from "../login/login.component";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-smart-barometer-info',
  templateUrl: './smart-barometer-info.component.html',
  styleUrls: ['./smart-barometer-info.component.css']
})
export class SmartBarometerInfoComponent implements OnInit {
  // private barometerData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly barometerData$: Observable<any> =this.barometerData$$.asObservable();

  private barometerPhysioData$$: BehaviorSubject<BarometerData[]> =new BehaviorSubject<BarometerData[]>([]);
  readonly barometerPhysioData$: Observable<BarometerData[]> =this.barometerPhysioData$$.asObservable();

  private barometerPhysioData2$$: BehaviorSubject<BarometerData2[]> =new BehaviorSubject<BarometerData2[]>([]);
  readonly barometerPhysioData2$: Observable<BarometerData2[]> =this.barometerPhysioData2$$.asObservable();

  chartDate: any= [];
  //currentUserId: string = '';
  currentUser: string | null = null;
  constructor(private fyzioDataService: FyzioDataService,private auth : AuthService) { }

  ngOnInit(): void {

    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if(this.currentUser && this.currentUser=== 'e2FZnn962YZQW23c59eLTzlHPSl1'){
        combineLatest([
          this.fyzioDataService.getBarometerData().pipe(map(data => data.map(item => item.sys))),
          this.fyzioDataService.getBarometerData().pipe(map(data => data.map(item => item.dia))),
          this.fyzioDataService.getBarometerData().pipe(map(data => data.map(item => ({
            date: moment(item.date, 'DD-MM-YYYY'),
            sys: item.sys,
            dia: item.dia,

          }))))
        ]).subscribe(([sys, dia, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: dates.map(d => d.date.format('DD-MM-YYYY')),
              datasets: [{
                label: 'systolický tlak',
                data: sys,
                borderWidth: 1
              },
                {
                  label: 'diastolický tlak',
                  data: dia,
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
          this.fyzioDataService.getBarometerData2().pipe(map(data => data.map(item => item.sys))),
          this.fyzioDataService.getBarometerData2().pipe(map(data => data.map(item => item.dia))),
          this.fyzioDataService.getBarometerData2().pipe(map(data => data.map(item => ({
            date: moment(item.date, 'DD-MM-YYYY'),
            sys: item.sys,
            dia: item.dia,

          }))))
        ]).subscribe(([sys, dia, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: dates.map(d => d.date.format('DD-MM-YYYY')),
              datasets: [{
                label: 'systolický tlak',
                data: sys,
                borderWidth: 1
              },
                {
                  label: 'diastolický tlak',
                  data: dia,
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



    this.fyzioDataService.getBarometerData().subscribe((result: any)=>{
      console.log("vysledok"+result);
      this.barometerPhysioData$$.next(result);
      //this.chartDate=result.date;

    });

    this.fyzioDataService.getBarometerData2().subscribe((result: any)=>{
      console.log("vysledok"+result);
      this.barometerPhysioData2$$.next(result);
      //this.chartDate=result.date;

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
  public isLoggedIn() {

    // return this.isLoggin=true;
    return this.auth.isLoggedIn();
  }
// currentUser(){
//     return this.auth.currentUser();
// }

}
