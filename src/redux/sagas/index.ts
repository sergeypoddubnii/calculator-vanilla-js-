import { all } from "redux-saga/effects";
import { watchLoadGlobalCovid, watchLoadDailyCovid } from "./covid";
import {
  watchLoadCurrentWeatherCity,
  watchLoadCurrentWeatherGeo,
} from "./weather";

export default function* rootSaga() {
  yield all([
    watchLoadGlobalCovid(),
    watchLoadDailyCovid(),
    watchLoadCurrentWeatherCity(),
    watchLoadCurrentWeatherGeo(),
  ]);
}
