import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(logger, sagaMiddleware);

export const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);
