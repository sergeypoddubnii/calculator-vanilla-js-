import {
  currentWeatherType,
  dailyWeatherType,
  weatherStateType,
} from "./types";

interface stateType {
  covid: object;
  weather: weatherStateType;
}

export const getCurrentWeather = (state: stateType): currentWeatherType =>
  state.weather.currentWeather;
export const getDailyForecast = (state: stateType): dailyWeatherType[] =>
  state.weather.dailyWeather;
