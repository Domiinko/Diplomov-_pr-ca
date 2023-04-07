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

export interface RopeDataStatProf {
  id: number,
  date: number,
  times: number,
  tep: number,
  hmotnost: number,
  vek: number,
  kcal: number
}

export interface ScaleDataStatProf {
  id: number,
  date: number,
  weight: number,
  bmi: number
}
export interface ScaleDataStat {
  id: number,
  date: number,
  weight: number,
  bmi: number,
  weight2: number,
  bmi2: number
}
export interface WatchDataStat{
  date: number;
  tep: number;
  tep2: number;
}
export interface BarometerDataStat {
  id : number;
  date : number;
  sys : number;
  dia : number;
  sys2 : number;
  dia2 : number;
}
