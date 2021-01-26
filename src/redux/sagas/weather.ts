import { call, takeEvery, put } from "redux-saga/effects";
import { loadCurrentWeather } from "../../api/weather";
import { GET_CURRENT_WEATHER_CITY } from "../weather/types";
import { putCurrentWeatherByCity } from "../weather/actions";

function* workerLoadCurrentWeather(action) {
  try {
    const loadedWeaher = yield call(loadCurrentWeather, action.payload);
    yield put(putCurrentWeatherByCity(loadedWeaher));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadCurrentWeather() {
  yield takeEvery(GET_CURRENT_WEATHER_CITY, workerLoadCurrentWeather);
}
