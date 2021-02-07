import axios from "axios";

const baseUrl = "https://api.weatherbit.io/v2.0/";
const keyApi = "&key=0812a8100941482089950b497b8cb0f7";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const loadCurrentWeatherByCity = (city): any =>
  axios.get(`${baseUrl}/current?city=${city}${keyApi}`);

export const loadCurrentWeatherByGeo = (lat: any, lon: any): any =>
  axios.get(`${baseUrl}/current&lat=${lat}&lon=${lon}${keyApi}`);
