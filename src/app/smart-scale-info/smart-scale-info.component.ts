import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {FyzioDataService} from "../fyzio-data.service";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {AuthService} from "../shared/auth.service";
import * as moment from "moment/moment";
import {Chart} from "chart.js";

@Component({
  selector: 'app-smart-scale-info',
  templateUrl: './smart-scale-info.component.html',
  styleUrls: ['./smart-scale-info.component.css']
})
export class SmartScaleInfoComponent implements OnInit {
  private scaleData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly scaleData$: Observable<any> =this.scaleData$$.asObservable();

  private scaleData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly scaleData01$: Observable<any> =this.scaleData01$$.asObservable();

  constructor(private fyzioDataService: FyzioDataService, private auth : AuthService) { }
  currentUser: string | null = null;
  ngOnInit(): void {
    this.fyzioDataService.getScaleData().subscribe((result: any)=>{
      // console.log(result);
      this.scaleData$$.next(result);
    });

    this.fyzioDataService.getScaleData().subscribe(
      (response)=> {
        this.scaleData$$.next(response);
      }
    );

    this.fyzioDataService.getScaleData01().subscribe(
      (response)=> {
        this.scaleData$$.next(response);
      }
    );



    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if(this.currentUser && this.currentUser=== 'e2FZnn962YZQW23c59eLTzlHPSl1'){
        combineLatest([
          this.fyzioDataService.getScaleData().pipe(map((data: any) => data['weight'].map((item: any) => item?.weight))),
          this.fyzioDataService.getScaleData().pipe(map((data: any) => data['weight'].map((item: any) => item?.bmi))),
          this.fyzioDataService.getScaleData().pipe(map((data: any)  => data['weight'].map((item: any) => ({
            date: moment(item.date, 'YYYY-MM-DD'),
            weight: item?.weight,
            bmi: item?.bmi,

          }))))
        ]).subscribe(([vaha, bmicko, date]) => {
          console.log("Vysledky" + date);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: date.map((d: any) => d.date.format('YYYY-MM-DD')),
              datasets: [{
                label: 'Hmotnosť',
                data: vaha,
                borderWidth: 1
              },
                {
                  label: 'BMI',
                  data: bmicko,
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













      }
      if(this.currentUser && this.currentUser=== '5o6uneDu0KbLOWC2RSzIYSt9Aa43'){
        combineLatest([

          this.fyzioDataService.getScaleData01().pipe(map((data: any) => data['weight'].map((item: any) => item?.weight))),
          this.fyzioDataService.getScaleData01().pipe(map((data: any) => data['weight'].map((item: any) => item?.bmi))),
          this.fyzioDataService.getScaleData01().pipe(map((data: any)  => data['weight'].map((item: any) => ({
            date: moment(item.date, 'YYYY-MM-DD'),
            weight: item?.weight,
            bmi: item?.bmi,


          }))))
        ]).subscribe(([vaha, bmicko, date]) => {
          console.log("Vysledky" + date);
          new Chart('myChart', {
            type: 'line',
            data: {
              labels: date.map((d: any) => d.date.format('YYYY-MM-DD')),
              datasets: [{
                label: 'Hmotnosť',
                data: vaha,
                borderWidth: 1
              },
                {
                  label: 'BMI',
                  data: bmicko,
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


  }

  public isLoggedIn() {
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
