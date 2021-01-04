import { call, takeEvery, put } from "redux-saga/effects";
import { loadGlobalDataAxios } from "../../api/covid";
import { LOAD_GLOBAL_COVID } from "../covid/types";
import { putGlobalCovid } from "../covid/actions";

function* workerLoadGlobalCovid() {
  const loadedData = yield call(loadGlobalDataAxios);
  yield put(putGlobalCovid(loadedData));
}

export function* watchLoadGlobalCovid() {
  yield takeEvery(LOAD_GLOBAL_COVID, workerLoadGlobalCovid);
}
