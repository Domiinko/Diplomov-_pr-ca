import { Component, OnInit } from '@angular/core';
import {FyzioDataService} from "../fyzio-data.service";
import {BehaviorSubject, map, Observable, take} from "rxjs";
import {
  BandData,
  BandData1,
  BandData2,
  BarometerData,
  BarometerData2,
  WatchData1,
  WatchData2
} from '../interfaces/main_interface';
import {AuthService} from "../shared/auth.service";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  fyzioData: any;
  fyzioData$: any;

  "jano-fero": any;

  // private bandPhysioData$$: BehaviorSubject<BandData[] | undefined> =new BehaviorSubject<BandData[] | undefined>([] );
  // readonly bandPhysioData$: Observable<BandData[] | undefined> =this.bandPhysioData$$.asObservable();

  private barometerPhysioData$$: BehaviorSubject<BarometerData[]> =new BehaviorSubject<BarometerData[]>([]);
  readonly barometerPhysioData$: Observable<BarometerData[]> =this.barometerPhysioData$$.asObservable();

  private barometerPhysioData2$$: BehaviorSubject<BarometerData2[]> =new BehaviorSubject<BarometerData2[]>([]);
  readonly barometerPhysioData2$: Observable<BarometerData2[]> =this.barometerPhysioData2$$.asObservable();

  private bandActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData$: Observable<any> =this.bandActivitiesData$$.asObservable();

  private scaleData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly scaleData$: Observable<any> =this.scaleData$$.asObservable();

  private watchActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly watchActivitiesData$: Observable<any> =this.watchActivitiesData$$.asObservable();

  private ropeActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly ropeActivitiesData$: Observable<any> =this.ropeActivitiesData$$.asObservable();

  private ropeActivitiesData2$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly ropeActivitiesData2$: Observable<any> =this.ropeActivitiesData2$$.asObservable();

  // private bandActivitiesData1$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly bandActivitiesData1$: Observable<any> =this.bandActivitiesData1$$.asObservable();

  // private bandActivitiesData2$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly bandActivitiesData2$: Observable<any> =this.bandActivitiesData2$$.asObservable();

  // private watchActivitiesData1$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly watchActivitiesData1$: Observable<any> =this.watchActivitiesData1$$.asObservable();
  //
  // private watchActivitiesData2$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly watchActivitiesData2$: Observable<any> =this.watchActivitiesData1$$.asObservable();

  // private scaleActivitiesData1$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly scaleActivitiesData1$: Observable<any> =this.watchActivitiesData1$$.asObservable();
  //
  // private scaleActivitiesData2$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  // readonly scaleActivitiesData2$: Observable<any> =this.scaleActivitiesData1$$.asObservable();

  private scaleData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly scaleData01$: Observable<any> =this.scaleData01$$.asObservable();

  private watchActivitiesData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly watchActivitiesData01$: Observable<any> =this.watchActivitiesData01$$.asObservable();

  private bandActivitiesData01$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData01$: Observable<any> =this.bandActivitiesData01$$.asObservable();

  currentUser: string | null = null;

  constructor(private fyzioDataService: FyzioDataService, private auth : AuthService) {
  }

  ngOnInit(): void {


    // this.fyzioData$ = this.fyzioDataService.getData2().pipe().subscribe((data) => {
    //   this.fyzioData = data;
    // });
    //
    // this.fyzioDataService.getWatchData1().subscribe((result: any)=>{
    //   console.log(result);
    //   this.watchActivitiesData1$$.next(result);
    // });
    // this.fyzioDataService.getWatchData2().subscribe((result: any)=>{
    //   console.log(result);
    //   this.watchActivitiesData2$$.next(result);
    // });
    //
    // this.fyzioDataService.getBandData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.bandActivitiesData$$.next(result);
    // });
    // this.fyzioDataService.getBandData1().subscribe((result: any)=>{
    //   console.log(result);
    //   this.bandActivitiesData1$$.next(result);
    // });
    // this.fyzioDataService.getBandData2().subscribe((result: any)=>{
    //   console.log(result);
    //   this.bandActivitiesData2$$.next(result);
    // });
    //
    // this.fyzioDataService.getWatchData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.watchActivitiesData$$.next(result);
    // });
    //
    // this.fyzioDataService.getBarometerData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.barometerPhysioData$$.next(result);
    // });
    //
    // this.fyzioDataService.getScaleData().subscribe(
    //   (response)=> {
    //     console.log('info message'+response);
    //     this.scaleData$$.next(response);
    //   }
    // );
    // this.fyzioDataService.getScaleData01().subscribe(
    //   (response)=> {
    //     console.log('info message'+response);
    //     this.scaleData$$.next(response);
    //   }
    // );
    //
    // this.fyzioDataService.getRopeData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.ropeActivitiesData$$.next(result);
    // });

/////////////////////////////////////////////////////////////////////////////////////////////////
    this.auth.getCurrentUserId().subscribe(uid => {
      this.currentUser = uid;
      if (this.currentUser && this.currentUser === '5o6uneDu0KbLOWC2RSzIYSt9Aa43') {
        this.fyzioDataService.getScaleData01().subscribe(
          (response)=> {
            console.log('info message'+response);
            this.scaleData$$.next(response);
          }
        );

        this.fyzioDataService.getRopeData2().subscribe((result: any)=>{
          console.log(result);
          this.ropeActivitiesData$$.next(result);
        });

        this.fyzioDataService.getBarometerData2().subscribe((result: any)=>{
          console.log(result);
          this.barometerPhysioData$$.next(result);
        });

        this.fyzioDataService.getWatchData01().subscribe((result: any)=>{
          console.log(result);
          this.watchActivitiesData$$.next(result);
        });

        this.fyzioDataService.getBandData01().subscribe((result: any)=>{
          console.log(result);
          this.bandActivitiesData$$.next(result);
        });

      }
    if (this.currentUser && this.currentUser === 'e2FZnn962YZQW23c59eLTzlHPSl1') {
      this.fyzioDataService.getScaleData().subscribe(
        (response)=> {
          console.log('info message'+response);
          this.scaleData$$.next(response);
        }
      );

      this.fyzioDataService.getRopeData().subscribe((result: any)=>{
        console.log(result);
        this.ropeActivitiesData$$.next(result);
      });

      this.fyzioDataService.getBarometerData().subscribe((result: any)=>{
        console.log(result);
        this.barometerPhysioData$$.next(result);
      });

      this.fyzioDataService.getWatchData().subscribe((result: any)=>{
        console.log(result);
        this.watchActivitiesData$$.next(result);
      });

      this.fyzioDataService.getBandData().subscribe((result: any)=>{
        console.log(result);
        this.bandActivitiesData$$.next(result);
      });

    }
    // else if (this.currentUser && this.currentUser === '5o6uneDu0KbLOWC2RSzIYSt9Aa43') {
    //   this.fyzioDataService.getScaleData01().subscribe(
    //     (response)=> {
    //       console.log('info message'+response);
    //       this.scaleData$$.next(response);
    //     }
    //   );
    //
    //   this.fyzioDataService.getRopeData2().subscribe((result: any)=>{
    //     console.log(result);
    //     this.ropeActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBarometerData2().subscribe((result: any)=>{
    //     console.log(result);
    //     this.barometerPhysioData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getWatchData01().subscribe((result: any)=>{
    //     console.log(result);
    //     this.watchActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBandData01().subscribe((result: any)=>{
    //     console.log(result);
    //     this.bandActivitiesData$$.next(result);
    //   });
    //
    // }
    // else{
    //
    // }

    });

    // if (this.currentUser && this.currentUser === 'e2FZnn962YZQW23c59eLTzlHPSl1') {
    //   this.fyzioDataService.getScaleData().subscribe(
    //     (response)=> {
    //       console.log('info message'+response);
    //       this.scaleData$$.next(response);
    //     }
    //   );
    //
    //   this.fyzioDataService.getRopeData().subscribe((result: any)=>{
    //     console.log(result);
    //     this.ropeActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBarometerData().subscribe((result: any)=>{
    //     console.log(result);
    //     this.barometerPhysioData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getWatchData().subscribe((result: any)=>{
    //     console.log(result);
    //     this.watchActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBandData().subscribe((result: any)=>{
    //     console.log(result);
    //     this.bandActivitiesData$$.next(result);
    //   });
    //
    // }if (this.currentUser && this.currentUser === '5o6uneDu0KbLOWC2RSzIYSt9Aa43') {
    //   this.fyzioDataService.getScaleData01().subscribe(
    //     (response)=> {
    //       console.log('info message'+response);
    //       this.scaleData$$.next(response);
    //     }
    //   );
    //
    //   this.fyzioDataService.getRopeData2().subscribe((result: any)=>{
    //     console.log(result);
    //     this.ropeActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBarometerData2().subscribe((result: any)=>{
    //     console.log(result);
    //     this.barometerPhysioData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getWatchData01().subscribe((result: any)=>{
    //     console.log(result);
    //     this.watchActivitiesData$$.next(result);
    //   });
    //
    //   this.fyzioDataService.getBandData01().subscribe((result: any)=>{
    //     console.log(result);
    //     this.bandActivitiesData$$.next(result);
    //   });
    //
    // }
    // else{
    //
    // }



  }



}
