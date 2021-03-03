import {
  GET_CITY,
  GET_GEOLOCATION,
  PUT_CURRENT_WEATHER,
  PUT_DAILY_WEATHER,
  putCurrentWeatherType,
  putDailyWeatherType,
  getInfoCityType,
  getInfoGeolocationType,
} from "./types";
import { selectData } from "../../helpers/weather/selectData";
import { dailySelectData } from "../../helpers/weather/dailySelectData";

// put loaded data
export const putCurrentWeather = (weather): putCurrentWeatherType => ({
  type: PUT_CURRENT_WEATHER,
  payload: selectData(weather.data.data[0]),
});

export const putDailyWeather = (weather): putDailyWeatherType => ({
  type: PUT_DAILY_WEATHER,
  payload: dailySelectData(weather.data.data),
});

//get city name
export const getInfoCity = (city): getInfoCityType => ({
  type: GET_CITY,
  payload: city,
});

//get geolocation
export const getInfoGeolocation = (lat, lon): getInfoGeolocationType => ({
  type: GET_GEOLOCATION,
  payload: { lat, lon },
});
