import { all } from "redux-saga/effects";
import { watchLoadGlobalCovid, watchLoadDailyCovid } from "./covid";
import { watchLoadWeatherCity, watchLoadWeatherGeo } from "./weather";

export default function* rootSaga() {
  yield all([
    watchLoadGlobalCovid(),
    watchLoadDailyCovid(),
    watchLoadWeatherCity(),
    watchLoadWeatherGeo(),
  ]);
}
