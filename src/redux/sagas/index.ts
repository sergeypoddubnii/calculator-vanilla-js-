import { all } from "redux-saga/effects";
import { watchLoadGlobalCovid } from "./covid";

export default function* rootSaga() {
  yield all([watchLoadGlobalCovid()]);
}
