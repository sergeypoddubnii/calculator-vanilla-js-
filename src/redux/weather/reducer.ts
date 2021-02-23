export {
  PUT_CURRENT_WEATHER,
  PUT_HOURLY_WEATHER,
  PUT_DAILY_WEATHER,
} from "./types";

const addCurrentWeather = (state, action) => ({
  ...state,
  currentWeather: action.payload,
});

const addHourlyWeather = (state, action) => ({
  ...state,
  hourlyWeather: action.payload,
});

const addDailyWeather = (state, action) => ({
  ...state,
  dailyWeather: action.payload,
});

const CovidReducer = {
  stateKey: "weather",
  initialState: {
    currentWeather: {},
    hourlyWeather: [],
    dailyWeather: [],
  },
  handlers: {
    PUT_CURRENT_WEATHER: addCurrentWeather,
    PUT_HOURLY_WEATHER: addHourlyWeather,
    PUT_DAILY_WEATHER: addDailyWeather,
  },
};

export default CovidReducer;
