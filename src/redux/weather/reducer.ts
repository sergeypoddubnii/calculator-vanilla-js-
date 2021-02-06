export { PUT_CURRENT_WEATHER } from "./types";

const addCurrentWeather = (state, action) => ({
  ...state,
  currentWeather: action.payload.data.data[0],
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
