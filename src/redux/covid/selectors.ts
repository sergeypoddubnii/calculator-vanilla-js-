import { createSelector } from "reselect";
import { getMonthGlobalCovid } from "../../helpers/covid/getMonthGlobalCovid";

export const getGlobalCovidState = (state) => state.covid.global;

const getDailyCovid = (state) => state.covid.daily;

export const getDailyCovidState = createSelector(getDailyCovid, (dailyData) => getMonthGlobalCovid(dailyData));
