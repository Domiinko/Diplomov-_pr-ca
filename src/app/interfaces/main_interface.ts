export interface BarometerData {
  id : number;
  date : number;
  sys : number;
  dia : number;
}
export interface BarometerData2 {
  id : number;
  date : number;
  sys : number;
  dia : number;
}
export interface RopeData {
  id : number;
  date : number;
  times : number;
  kcal : number;
}
export interface RopeData2 {
  id : number;
  date : number;
  times : number;
  kcal : number;
}
export interface BandData {
  best: Best_I;
}

export interface Best_I{
  total: Total_I;
}
export interface Total_I{
  distance: Distance_I;
  floors: Floors_I;
  steps: Steps_I;
}
export interface Distance_I{
  date: number;
  value: number;
}
export interface Floors_I{
  date: number;
  value: number;
}
export interface Steps_I{
  date: number;
  value: number;
}
export interface BandData1{
  date: number;
  value: number;
}

export interface BandData2{
  date: number;
  value: number;
}
export interface WatchData1{
  date: number;
  value: number;
}

export interface WatchData2{
  date: number;
  value: number;
}


export interface WatchData {

}
