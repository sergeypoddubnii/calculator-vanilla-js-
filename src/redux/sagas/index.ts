import { all } from "redux-saga/effects";
import { watchLoadGlobalCovid, watchLoadDailyCovid } from "./covid";
import { watchLoadCurrentWeather } from "./weather";

export default function* rootSaga() {
  yield all([
    watchLoadGlobalCovid(),
    watchLoadDailyCovid(),
    watchLoadCurrentWeather(),
  ]);
}
