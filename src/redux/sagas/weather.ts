import { call, takeEvery, put, all } from "redux-saga/effects";
import {
  loadCurrentWeatherByCity,
  loadCurrentWeatherByGeo,
  loadForecastHourlyByCity,
  loadForecasthourlyByGeo,
} from "../../api/weather";
import { GET_CITY, GET_GEOLOCATION } from "../weather/types";
import { putCurrentWeather, putHourlyWeather } from "../weather/actions";

//load current weather and hourly forecast by city name
function* workerLoadCurrentWeatherCity(action) {
  try {
    const [loadedCurrentWeaher, loadedHourly] = yield all([
      call(loadCurrentWeatherByCity, action.payload),
      call(loadForecastHourlyByCity, action.payload),
    ]);
    yield put(putHourlyWeather(loadedHourly));
    yield put(putCurrentWeather(loadedCurrentWeaher));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadCurrentWeatherCity() {
  yield takeEvery(GET_CITY, workerLoadCurrentWeatherCity);
}

//load current weather and hourly forecast by geolocation
function* workerLoadCurrentWeatherGeo(action) {
  try {
    const [loadedWeather, loadedHourlyForecast] = yield all([
      call(loadCurrentWeatherByGeo, action.payload.lat, action.payload.lon),
      // call(loadForecasthourlyByGeo, action.payload.lat, action.payload.lon),
    ]);
    // yield put(putHourlyWeather(loadedHourlyForecast));
    yield put(putCurrentWeather(loadedWeather));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadCurrentWeatherGeo() {
  yield takeEvery(GET_GEOLOCATION, workerLoadCurrentWeatherGeo);
}
