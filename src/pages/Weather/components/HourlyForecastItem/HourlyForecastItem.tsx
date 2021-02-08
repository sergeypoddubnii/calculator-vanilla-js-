import React from "react";
import moment from "moment";
import {
  Wrapper,
  Time,
  Icon,
  Temp,
  Himidity,
} from "./styledHourlyForecastItem";

const HourlyForecastItem = ({ temp, tempFills, weather, humidity, time }) => {
  const icon =
    weather && require(`../../../../assets/weather/icons/${weather.icon}.png`);

  return (
    <Wrapper>
      <Time>{moment(time).format("LT")}</Time>
      <Icon>
        <img src={icon.default} width={40} alt={time} />
      </Icon>
      <Temp>{temp}°</Temp>
      <Himidity>{humidity}%</Himidity>
    </Wrapper>
  );
};
export default HourlyForecastItem;
