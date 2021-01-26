import { combineReducers } from "redux";
import createReducer from "./createReducer";
import CovidReducer from "./covid/reducer";
import WeatherReducer from "./weather/reducer";

const reducers = [CovidReducer, WeatherReducer];

export const rootReducer = combineReducers(
  reducers.reduce(
    (acc, reducer) => ({
      ...acc,
      [reducer.stateKey]: createReducer(reducer.initialState, reducer.handlers),
    }),
    {}
  )
);
