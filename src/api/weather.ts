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
  axios.get(`${baseUrl}/forecast/daily?city=${city}${keyApi}`);

export const loadForecasthourlyByGeo = (lat: any, lon: any): any =>
  axios.get(
    `${baseUrl}/forecast/hourly?lat=${lat}&lon=${lon}${keyApi}&hours=24`
  );
// https://api.weatherbit.io/v2.0/forecast/hourly?city=Raleigh,NC&key=API_KEY&hours=48
