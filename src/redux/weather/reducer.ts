import { weatherStateType, weatherActions } from "./types";
export { PUT_CURRENT_WEATHER, PUT_DAILY_WEATHER } from "./types";

const addCurrentWeather = (
  state: weatherStateType,
  action: weatherActions
) => ({
  ...state,
  currentWeather: action.payload,
});

const addDailyWeather = (state: weatherStateType, action: weatherActions) => ({
  ...state,
  dailyWeather: action.payload,
});

const CovidReducer = {
  stateKey: "weather",
  initialState: {
    currentWeather: {},
    dailyWeather: [],
  },
  handlers: {
    PUT_CURRENT_WEATHER: addCurrentWeather,
    PUT_DAILY_WEATHER: addDailyWeather,
  },
};

export default CovidReducer;
