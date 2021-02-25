import axios from "axios";

const baseUrl = "https://api.weatherbit.io/v2.0/";
const keyApi = "&key=c74bebc4abf546899b3d706e3a7d7bb2";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const loadCurrentWeatherByCity = (city): any =>
  axios.get(`${baseUrl}/current?city=${city}${keyApi}`);

export const loadCurrentWeatherByGeo = (lat: any, lon: any): any =>
  axios.get(`${baseUrl}/current?lat=${lat}&lon=${lon}${keyApi}`);

// load hourly forecast 24 hours
export const loadForecastHourlyByCity = (city): any =>
  axios.get(`${baseUrl}/forecast/hourly?city=${city}${keyApi}`);

export const loadForecastHourlyByGeo = (lat: any, lon: any): any =>
  axios.get(
    `${baseUrl}/forecast/hourly?lat=${lat}&lon=${lon}${keyApi}&hours=24`
  );

// load daily forecast
export const loadForecastDailyByCity = (city): any =>
  axios.get(`${baseUrl}/forecast/daily?city=${city}${keyApi}`);

export const loadForecastDailyByGeo = (lat: any, lon: any): any =>
  axios.get(`${baseUrl}/forecast/daily?lat=${lat}&lon=${lon}${keyApi}`);

// https://api.weatherbit.io/v2.0/forecast/hourly?city=Raleigh,NC&key=API_KEY&hours=48
