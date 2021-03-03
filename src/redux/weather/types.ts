// get city
export const GET_CITY = "GET_CITY";
// get geolocation
export const GET_GEOLOCATION = "GET_GEOLOCATION";
// put  weather
export const PUT_CURRENT_WEATHER = "PUT_CURRENT_WEATHER";
export const PUT_DAILY_WEATHER = "PUT_DAILY_WEATHER";

//geolocation types
interface geoLocation {
  lat: number;
  lon: number;
}
//weather object type
interface weatherType {
  icon: string;
  description: string;
}
//dailyweather type
export interface dailyWeatherType {
  date: string;
  humidity: number;
  weather: weatherType;
  maxTemp: number;
  minTemp: number;
}
//current Weather type
export interface currentWeatherType {
  city_name: string;
  clouds: number;
  humidity: number;
  ob_time: string;
  pres: number;
  sunrise: string;
  sunset: string;
  temp: number;
  tempFills: number;
  weather: weatherType;
  windDirection: string;
  windSpeed: number;
}
//weather state type
export interface weatherStateType {
  currentWeather: currentWeatherType;
  dailyWeather: dailyWeatherType[];
}

// actions types
export interface putCurrentWeatherType {
  type: typeof PUT_CURRENT_WEATHER;
  payload: currentWeatherType;
}

export interface putDailyWeatherType {
  type: typeof PUT_DAILY_WEATHER;
  payload: dailyWeatherType[];
}

export interface getInfoCityType {
  type: typeof GET_CITY;
  payload: string;
}

export interface getInfoGeolocationType {
  type: typeof GET_GEOLOCATION;
  payload: geoLocation;
}
// types of all actions
export type weatherActions =
  | putCurrentWeatherType
  | putDailyWeatherType
  | getInfoCityType
  | getInfoGeolocationType;
