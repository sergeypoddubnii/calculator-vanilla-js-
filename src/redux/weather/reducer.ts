export { PUT_CURRENT_WEATHER, PUT_DAILY_WEATHER } from "./types";

const addCurrentWeather = (state, action) => ({
  ...state,
  currentWeather: action.payload,
});

const addDailyWeather = (state, action) => ({
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
