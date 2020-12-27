import CalcReducer from "./calculator/reducer";
import { combineReducers } from "redux";
import createReducer from "./createReducer";

const reducers = [CalcReducer];

export const rootReducer = combineReducers(
  reducers.reduce(
    (acc, reducer) => ({
      ...acc,
      [reducer.stateKey]: createReducer(reducer.initialState, reducer.handlers),
    }),
    {}
  )
);
