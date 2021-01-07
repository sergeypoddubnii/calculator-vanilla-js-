import { call, takeEvery, put } from "redux-saga/effects";
import { loadGlobalDataAxios, loadDailyDataAxios } from "../../api/covid";
import { LOAD_DAILY_COVID, LOAD_GLOBAL_COVID } from "../covid/types";
import { putDailyCovid, putGlobalCovid } from "../covid/actions";

function* workerLoadGlobalCovid() {
  const loadedData = yield call(loadGlobalDataAxios);
  yield put(putGlobalCovid(loadedData));
}

export function* watchLoadGlobalCovid() {
  yield takeEvery(LOAD_GLOBAL_COVID, workerLoadGlobalCovid);
}

function* workerLoadDailyCovid() {
  const loadedData = yield call(loadDailyDataAxios);
  yield put(putDailyCovid(loadedData));
}

export function* watchLoadDailyCovid() {
  yield takeEvery(LOAD_DAILY_COVID, workerLoadDailyCovid);
}
