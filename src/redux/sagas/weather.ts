import { call, takeEvery, put, all } from "redux-saga/effects";
import {
  loadCurrentWeatherByCity,
  loadCurrentWeatherByGeo,
  loadForecastDailyByCity,
  loadForecastDailyByGeo,
} from "../../api/weather";
import { GET_CITY, GET_GEOLOCATION } from "../weather/types";
import { putCurrentWeather, putDailyWeather } from "../weather/actions";

//load current hourly daily by city name
function* workerLoadWeatherCity(action) {
  try {
    const [loadedCurrentWeaher, loadedDaily] = yield all([
      call(loadCurrentWeatherByCity, action.payload),
      call(loadForecastDailyByCity, action.payload),
    ]);
    yield put(putCurrentWeather(loadedCurrentWeaher));
    yield put(putDailyWeather(loadedDaily));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadWeatherCity() {
  yield takeEvery(GET_CITY, workerLoadWeatherCity);
}

//load current daily hourly weather by geo
function* workerLoadWeatherGeo(action) {
  try {
    const [loadedWeather, loadedDaily] = yield all([
      call(loadCurrentWeatherByGeo, action.payload.lat, action.payload.lon),
      call(loadForecastDailyByGeo, action.payload.lat, action.payload.lon),
    ]);
    yield put(putCurrentWeather(loadedWeather));
    yield put(putDailyWeather(loadedDaily));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadWeatherGeo() {
  yield takeEvery(GET_GEOLOCATION, workerLoadWeatherGeo);
}
