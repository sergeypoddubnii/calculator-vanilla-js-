import React, { useEffect } from "react";
import { loadCurrentWeather } from "../../api/weather";

const Weather = () => {
  useEffect(() => {
    console.log(loadCurrentWeather());
  }, []);
  return (
    <div>
      <h1>Weather</h1>
    </div>
  );
};

export default Weather;
