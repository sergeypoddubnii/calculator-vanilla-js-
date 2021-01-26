import { PUT_CURRENT_WEATHER, GET_CURRENT_WEATHER_CITY } from "./types";

export const putCurrentWeatherByCity = (weather) => ({
  type: PUT_CURRENT_WEATHER,
  payload: weather,
});

export const getInfoCity = (city) => ({
  type: GET_CURRENT_WEATHER_CITY,
  payload: city,
});
