import { covidStateType, covidActionsType } from "./types";
export { PUT_GLOBAL_COVID, PUT_DAILY_COVID } from "./types";

const addToGlobal = (state: covidStateType, action: covidActionsType) => ({
  ...state,
  global: action.payload,
});

const addToDailyDate = (state: covidStateType, action: covidActionsType) => ({
  ...state,
  daily: action.payload,
});

const CovidReducer = {
  stateKey: "covid",
  initialState: {
    global: {},
    daily: [],
  },
  handlers: {
    PUT_GLOBAL_COVID: addToGlobal,
    PUT_DAILY_COVID: addToDailyDate,
  },
};

export default CovidReducer;
