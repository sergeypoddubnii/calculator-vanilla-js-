import { call, takeEvery, put } from "redux-saga/effects";
import { loadGlobalDataAxios, loadDailyDataAxios } from "../../api/covid";
import { LOAD_DAILY_COVID, LOAD_GLOBAL_COVID } from "../covid/types";
import { putDailyCovid, putGlobalCovid } from "../covid/actions";

function* workerLoadGlobalCovid() {
  try {
    const loadedData = yield call(loadGlobalDataAxios);
    yield put(putGlobalCovid(loadedData));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadGlobalCovid() {
  yield takeEvery(LOAD_GLOBAL_COVID, workerLoadGlobalCovid);
}

function* workerLoadDailyCovid() {
  try {
    const loadedData = yield call(loadDailyDataAxios);
    yield put(putDailyCovid(loadedData));
  } catch (error) {
    console.error(error);
  }
}

export function* watchLoadDailyCovid() {
  yield takeEvery(LOAD_DAILY_COVID, workerLoadDailyCovid);
}
