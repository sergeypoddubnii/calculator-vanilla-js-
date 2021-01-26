import React, { useEffect } from "react";
import { loadCurrentWeather } from "../../api/weather";
import Form from "./components/Form";
import Description from "./components/Description/index";

const Weather = () => {
  useEffect(() => {
    console.log(loadCurrentWeather("Kiev"));
  }, []);
  return (
    <div>
      <Form />
      <Description />
    </div>
  );
};

export default Weather;
