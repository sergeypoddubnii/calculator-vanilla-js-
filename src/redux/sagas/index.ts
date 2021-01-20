import { all } from "redux-saga/effects";
import { watchLoadGlobalCovid, watchLoadDailyCovid } from "./covid";

export default function* rootSaga() {
  yield all([watchLoadGlobalCovid(), watchLoadDailyCovid()]);
}
