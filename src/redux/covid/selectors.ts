import { countMonthGlobalCovid } from "../../helpers/covid/countMonthGlobalCovid";
import { countPerMonthCovid } from "../../helpers/covid/countPerMonthCovid";
import { createSelector } from "reselect";
import { covidStateType } from "./types";

interface stateType {
  covid: covidStateType;
  weather: object;
}

export const getGlobalCovidState = (state: stateType) => state.covid.global;

const getDailyCovidState = (state: stateType) => state.covid.daily;

export const getMonthGlobalCovid = createSelector(
  getDailyCovidState,
  (dailyState) => countMonthGlobalCovid(dailyState)
);

export const getPerMonthCovid = createSelector(
  getMonthGlobalCovid,
  (monthState) => countPerMonthCovid(monthState)
);
