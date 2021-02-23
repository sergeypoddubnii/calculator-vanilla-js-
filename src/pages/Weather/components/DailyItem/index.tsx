import React from "react";
import { Wrapper, DateTime, Himidity, Weather, Temp } from "./styledDailyItem";
import moment from "moment";

const DailyItem = ({ date, humidity, weather, maxTemp, minTemp }) => {
  const iconWeather =
    weather && require(`../../../../assets/weather/icons/${weather.icon}.png`);
  return (
    <Wrapper>
      <DateTime>{moment(date).format("dddd")}</DateTime>
      <Himidity>{humidity}%</Himidity>
      <Weather>
        <img src={iconWeather?.default} alt={weather?.description} width={40} />
      </Weather>
      <Temp>
        {maxTemp}/{minTemp}
      </Temp>
    </Wrapper>
  );
};
export default DailyItem;
