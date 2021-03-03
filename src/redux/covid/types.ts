// global
export const LOAD_GLOBAL_COVID = "LOAD_GLOBAL_COVID";
export const PUT_GLOBAL_COVID = "PUT_GLOBAL_COVID";
// daily
export const LOAD_DAILY_COVID = "LOAD_DAILY_COVID";
export const PUT_DAILY_COVID = "PUT_DAILY_COVID";

export interface loadGlobalCovidType {
  type: typeof LOAD_GLOBAL_COVID;
}

export interface loadDailyCovidType {
  type: typeof LOAD_DAILY_COVID;
}

interface globalCovidType {
  confirmed: number;
  recovered: number;
  deaths: number;
  lastUpdate: string;
}
// put global covid
export interface putGlobalCovidType {
  type: typeof PUT_GLOBAL_COVID;
  payload: globalCovidType;
}

interface dailyCovidType {
  confirmed: number;
  recovered: number;
  deaths: number;
}
//put daily covid
export interface putDailyCovidType {
  type: typeof PUT_DAILY_COVID;
  payload: dailyCovidType[];
}

// covid state type
export interface covidStateType {
  global: globalCovidType;
  daily: dailyCovidType;
}

// covid actions type
export type covidActionsType = putGlobalCovidType | putDailyCovidType;
