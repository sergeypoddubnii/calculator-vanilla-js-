export { PUT_CURRENT_WEATHER } from "./types";

const addCurrentWeather = (state, action) => ({
  ...state,
  currentWeather: action.payload,
});

const CovidReducer = {
  stateKey: "weather",
  initialState: {
    currentWeather: {},
  },
  handlers: {
    PUT_CURRENT_WEATHER: addCurrentWeather,
  },
};

export default CovidReducer;
