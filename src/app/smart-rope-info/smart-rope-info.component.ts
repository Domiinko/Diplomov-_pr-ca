import { Component } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {FyzioDataService} from "../fyzio-data.service";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {AuthService} from "../shared/auth.service";
import * as moment from "moment/moment";
import {Chart} from "chart.js";

@Component({
  selector: 'app-smart-rope-info',
  templateUrl: './smart-rope-info.component.html',
  styleUrls: ['./smart-rope-info.component.css']
})
export class SmartRopeInfoComponent {
  private ropeActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly ropeActivitiesData$: Observable<any> =this.ropeActivitiesData$$.asObservable();

  private ropeActivitiesData2$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly ropeActivitiesData2$: Observable<any> =this.ropeActivitiesData2$$.asObservable();

  currentUser: string | null = null;

  constructor(private fyzioDataService: FyzioDataService, private auth : AuthService) { }

  ngOnInit(): void {

    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if(this.currentUser && this.currentUser=== 'e2FZnn962YZQW23c59eLTzlHPSl1'){
        combineLatest([
          this.fyzioDataService.getRopeData().pipe(map(data => data.map(item => item.times))),
          this.fyzioDataService.getRopeData().pipe(map(data => data.map(item => item.kcal))),
          this.fyzioDataService.getRopeData().pipe(map(data => data.map(item => ({
            date: moment(item.date, 'DD-MM-YYYY'),
            times: item.times,
            kcal: item.kcal,

          }))))
        ]).subscribe(([times, kcal, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: dates.map(d => d.date.format('DD-MM-YYYY')),
              datasets: [{
                label: 'počet skokov',
                data: times,
                borderWidth: 1
              },
                {
                  label: 'spalené kalórie',
                  data: kcal,
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
          this.fyzioDataService.getRopeData2().pipe(map(data => data.map(item => item.times))),
          this.fyzioDataService.getRopeData2().pipe(map(data => data.map(item => item.kcal))),
          this.fyzioDataService.getRopeData2().pipe(map(data => data.map(item => ({
            date: moment(item.date, 'DD-MM-YYYY'),
            times: item.times,
            kcal: item.kcal,

          }))))
        ]).subscribe(([times, kcal, dates]) => {
          console.log("Vysledky", dates);

          new Chart('myChart', {
            type: 'line',
            data: {
              labels: dates.map(d => d.date.format('DD-MM-YYYY')),
              datasets: [{
                label: 'počet skokov',
                data: times,
                borderWidth: 1
              },
                {
                  label: 'spalené kalórie',
                  data: kcal,
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




    this.fyzioDataService.getRopeData().subscribe((result: any)=>{
      console.log(result);
      this.ropeActivitiesData$$.next(result);
    });

    this.fyzioDataService.getRopeData2().subscribe((result: any)=>{
      console.log(result);
      this.ropeActivitiesData2$$.next(result);
    });

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
