export { PUT_CURRENT_WEATHER, PUT_HOURLY_WEATHER } from "./types";

const addCurrentWeather = (state, action) => ({
  ...state,
  currentWeather: action.payload,
});

const addHourlyWeather = (state, action) => ({
  ...state,
  hourlyWeather: action.payload,
});

const CovidReducer = {
  stateKey: "weather",
  initialState: {
    currentWeather: {},
    hourlyWeather: [],
  },
  handlers: {
    PUT_CURRENT_WEATHER: addCurrentWeather,
    PUT_HOURLY_WEATHER: addHourlyWeather,
  },
};

export default CovidReducer;
