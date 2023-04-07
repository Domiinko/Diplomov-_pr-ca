import { Component } from '@angular/core';
import {async, BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {
  BarometerData, BarometerData2, BarometerDataStat,
  RopeDataStatProf,
  ScaleDataStat,
  ScaleDataStatProf,
  WatchDataStat
} from "../interfaces/main_interface";
import * as moment from "moment/moment";
import {Chart} from "chart.js";
import {FyzioDataService} from "../fyzio-data.service";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-statistica',
  templateUrl: './statistica.component.html',
  styleUrls: ['./statistica.component.css']
})
export class StatisticaComponent {
  private barometerPhysioData$$: BehaviorSubject<BarometerData[]> =new BehaviorSubject<BarometerData[]>([]);
  readonly barometerPhysioData$: Observable<BarometerData[]> =this.barometerPhysioData$$.asObservable();


  private ropeActivitiesDataProf$$: BehaviorSubject<RopeDataStatProf[]> =new BehaviorSubject<RopeDataStatProf[]>([]);
  readonly ropeActivitiesDataProf$: Observable<RopeDataStatProf[]> =this.ropeActivitiesDataProf$$.asObservable();

  private scaleDataStat$$: BehaviorSubject<ScaleDataStat[]> =new BehaviorSubject<ScaleDataStat[]>([]);
  readonly scaleDataStat$: Observable<ScaleDataStat[]> =this.scaleDataStat$$.asObservable();

  private watchDataStat$$: BehaviorSubject<WatchDataStat[]> =new BehaviorSubject<WatchDataStat[]>([]);
  readonly watchDataStat$: Observable<WatchDataStat[]> =this.watchDataStat$$.asObservable();

  private barometerDataStat$$: BehaviorSubject<BarometerDataStat[]> =new BehaviorSubject<BarometerDataStat[]>([]);
  readonly barometerDataStat$: Observable<BarometerDataStat[]> =this.barometerDataStat$$.asObservable();

  private scaleDataStatProf$$: BehaviorSubject<ScaleDataStatProf[]> =new BehaviorSubject<ScaleDataStatProf[]>([]);
  readonly scaleDataStatProf$: Observable<ScaleDataStatProf[]> =this.scaleDataStatProf$$.asObservable();

  private bandActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData$: Observable<any> =this.bandActivitiesData$$.asObservable();


  // private ropeActivitiesDataProf$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly ropeActivitiesData$: Observable<any> =this.ropeActivitiesData$$.asObservable();

  private scaleData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly scaleData$: Observable<any> =this.scaleData$$.asObservable();


  currentUser: string | null = null;
  constructor(private fyzioDataService: FyzioDataService,private auth : AuthService) { }

  vysledokProf: number = 0.0;
  ngOnInit(): void {

    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;

      if (this.currentUser && this.currentUser === 'e2FZnn962YZQW23c59eLTzlHPSl1') {

        this.fyzioDataService.getBarometerData().subscribe((result: any) => {
          console.log("vysledok" + result);
          this.barometerPhysioData$$.next(result);

        });

        this.fyzioDataService.getBandData().subscribe((result: any) => {
          console.log(result + "msg");
          this.bandActivitiesData$$.next(result);
        });


        this.fyzioDataService.getScaleData().subscribe(
          (response) => {
            this.scaleData$$.next(response);
          }
        );


        this.fyzioDataService.getRopeDataStatProf().subscribe((result: any) => {
          console.log(result);
          this.ropeActivitiesDataProf$$.next(result);
        });

        this.fyzioDataService.getScaleDataStat().subscribe((result: any) => {
          console.log(result);
          this.scaleDataStat$$.next(result);
        });
        this.fyzioDataService.getWatchDataStat().subscribe((result: any) => {
          console.log(result);
          this.watchDataStat$$.next(result);
        });

        this.fyzioDataService.getScaleDataStatProf().subscribe((result: any) => {
          console.log(result);
          this.scaleDataStatProf$$.next(result);
        });

        this.fyzioDataService.getBaroDataStat().subscribe((result: any) => {
          console.log(result);
          this.barometerDataStat$$.next(result);
        });


        this.fyzioDataService.getRopeDataStatProf().subscribe((result: any) => {
          console.log(result);
         // this.ropeActivitiesDataProf$$.next(result);
         //  this.vysledokProf = (((0.2017* result.vek) + (0.1992 * result.hmotnost) + (0.6309 * result.tep)) - 55) - (result.times / 4.184);
         //  console.log(this.vysledokProf +" vysledocek");

          // if (result.vek !== 0 && result.hmotnost !== 0 && result.tep !== 0 && result.times !== 0 || ) {
          //   this.vysledokProf = (((0.2017* result.vek) + (0.1992 * result.hmotnost) + (0.6309 * result.tep)) - 55) - (result.times / 4.184);
          //   console.log(this.vysledokProf +" vysledocek");
          // }



            this.vysledokProf =( (((0.2017* result.vek) + (0.1992 * result.hmotnost) + (0.6309 * result.tep)) - 55) - (result.times / 4.184));
            console.log(this.vysledokProf +" vysledocek");
        });

      }
    });
    //     combineLatest([
    //       this.fyzioDataService.getRopeDataStatProf().pipe(map(data => data.map(item => item.times))),
    //       this.fyzioDataService.getRopeDataStatProf().pipe(map(data => data.map(item => item.vek))),
    //       this.fyzioDataService.getRopeDataStatProf().pipe(map(data => data.map(item => item.hmotnost))),
    //       this.fyzioDataService.getRopeDataStatProf().pipe(map(data => data.map(item => ({
    //         times: item.times,
    //         vek: item.vek,
    //         hmotnost: item.hmotnost,
    //         tep: item.tep
    //       })))),
    //       //   times: item.times,
    //       //   vek: item.vek,
    //       // hmotnost: item.hmotnost,
    //       // tep: item.tep
    //
    //     ]).subscribe(([times, vek, hmotnost, tep]) => {
    //       this.ropeActivitiesDataProf$$ = (0.2017 * (vek
    //     :
    //       (any)
    //     ))
    //     });
    //
    //   }
    // });




    // this.fyzioDataService.getBarometerData2().subscribe((result: any)=>{
    //   console.log("vysledok"+result);
    //   this.barometerPhysioData2$$.next(result);
    //   //this.chartDate=result.date;
    //
    // });
  }
  public isLoggedIn() {

    // return this.isLoggin=true;
    return this.auth.isLoggedIn();
  }


}
