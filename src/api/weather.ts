import axios from "axios";

const baseUrl = "https://api.weatherbit.io/v2.0/";
const keyApi = "&key=c74bebc4abf546899b3d706e3a7d7bb2";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const loadCurrentWeatherByCity = (city: string): any =>
  axios.get(`${baseUrl}/current?city=${city}${keyApi}`);

export const loadCurrentWeatherByGeo = (lat: number, lon: number): any =>
  axios.get(`${baseUrl}/current?lat=${lat}&lon=${lon}${keyApi}`);

// load daily forecast
export const loadForecastDailyByCity = (city: string): any =>
  axios.get(`${baseUrl}/forecast/daily?city=${city}${keyApi}`);

export const loadForecastDailyByGeo = (lat: number, lon: number): any =>
  axios.get(`${baseUrl}/forecast/daily?lat=${lat}&lon=${lon}${keyApi}`);
