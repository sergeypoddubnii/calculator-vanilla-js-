import {
  LOAD_GLOBAL_COVID,
  PUT_GLOBAL_COVID,
  PUT_DAILY_COVID,
  LOAD_DAILY_COVID,
  loadGlobalCovidType,
  loadDailyCovidType,
  putDailyCovidType,
  putGlobalCovidType,
} from "./types";

export const loadGlobalCovid = (): loadGlobalCovidType => ({
  type: LOAD_GLOBAL_COVID,
});

export const putGlobalCovid = ({ data }): putGlobalCovidType => {
  const parseData = {
    confirmed: data?.confirmed?.value,
    recovered: data?.recovered?.value,
    deaths: data?.deaths?.value,
    lastUpdate: data?.lastUpdate,
  };
  return {
    type: PUT_GLOBAL_COVID,
    payload: parseData,
  };
};

export const loadDailyCovid = (): loadDailyCovidType => ({
  type: LOAD_DAILY_COVID,
});

export const putDailyCovid = ({ data }): putDailyCovidType => {
  const mapedData = data.map((item) => ({
    confirmed: item?.confirmed?.total,
    deaths: item?.deaths?.total,
    date: item?.reportDate,
  }));

  return {
    type: PUT_DAILY_COVID,
    payload: mapedData,
  };
};
