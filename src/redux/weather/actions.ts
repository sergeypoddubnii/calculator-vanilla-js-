import {
  PUT_CURRENT_WEATHER,
  GET_CITY,
  GET_GEOLOCATION,
  PUT_HOURLY_WEATHER,
} from "./types";
import { selectData } from "../../helpers/weather/selectData";
import { hourlySelectData } from "../../helpers/weather/hourlySelectData";

export const putCurrentWeather = (weather) => ({
  type: PUT_CURRENT_WEATHER,
  payload: selectData(weather.data.data[0]),
});

export const putHourlyWeather = (weather) => ({
  type: PUT_HOURLY_WEATHER,
  payload: hourlySelectData(weather.data.data),
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
