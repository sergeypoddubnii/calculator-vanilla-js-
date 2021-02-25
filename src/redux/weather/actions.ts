import {
  GET_CITY,
  GET_GEOLOCATION,
  PUT_CURRENT_WEATHER,
  PUT_DAILY_WEATHER,
} from "./types";
import { selectData } from "../../helpers/weather/selectData";
import { dailySelectData } from "../../helpers/weather/dailySelectData";

// put loaded data
export const putCurrentWeather = (weather) => ({
  type: PUT_CURRENT_WEATHER,
  payload: selectData(weather.data.data[0]),
});

export const putDailyWeather = (weather) => ({
  type: PUT_DAILY_WEATHER,
  payload: dailySelectData(weather.data.data),
});

//get city name
export const getInfoCity = (city) => ({
  type: GET_CITY,
  payload: city,
});

//get geolocation
export const getInfoGeolocation = (lat, lon) => ({
  type: GET_GEOLOCATION,
  payload: { lat, lon },
});
