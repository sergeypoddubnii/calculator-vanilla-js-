import { call, takeEvery, put } from "redux-saga/effects";
import {
  loadCurrentWeatherByCity,
  loadCurrentWeatherByGeo,
} from "../../api/weather";
import { GET_CITY, GET_GEOLOCATION } from "../weather/types";
import { putCurrentWeather } from "../weather/actions";

//load weather by city name
function* workerLoadCurrentWeatherCity(action) {
  try {
    const loadedWeaher = yield call(loadCurrentWeatherByCity, action.payload);
    yield put(putCurrentWeather(loadedWeaher));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadCurrentWeatherCity() {
  yield takeEvery(GET_CITY, workerLoadCurrentWeatherCity);
}

//load weather by geolocation
function* workerLoadCurrentWeatherGeo(action) {
  try {
    const loadedWeather = yield call(
      loadCurrentWeatherByGeo,
      action.payload.lat,
      action.payload.lon
    );
    yield put(putCurrentWeather(loadedWeather));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadCurrentWeatherGeo() {
  yield takeEvery(GET_GEOLOCATION, workerLoadCurrentWeatherGeo);
}
