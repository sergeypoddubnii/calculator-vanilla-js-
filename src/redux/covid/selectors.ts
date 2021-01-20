import { countMonthGlobalCovid } from "../../helpers/covid/countMonthGlobalCovid";
import { countPerMonthCovid } from "../../helpers/covid/countPerMonthCovid";
import { createSelector } from "reselect";

export const getGlobalCovidState = (state) => state.covid.global;

const getDailyCovidState = (state) => state.covid.daily;

export const getMonthGlobalCovid = createSelector(getDailyCovidState, (dailyState) =>
  countMonthGlobalCovid(dailyState)
);

export const getPerMonthCovid = createSelector(getMonthGlobalCovid, (monthState) => countPerMonthCovid(monthState));
