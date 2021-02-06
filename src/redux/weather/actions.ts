import { PUT_CURRENT_WEATHER, GET_CITY, GET_GEOLOCATION } from "./types";
import { selectData } from "../../helpers/weather/selectData";

export const putCurrentWeather = (weather) => ({
  type: PUT_CURRENT_WEATHER,
  payload: selectData(weather),
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
