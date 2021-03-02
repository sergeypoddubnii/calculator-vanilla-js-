import React, { FC } from "react";
import { Wrapper, DateTime, Himidity, Weather, Temp } from "./styledDailyItem";
import moment from "moment";

interface weatherType {
  icon: string;
  description: string;
}

interface daiyItemPropsType {
  date: string;
  humidity: number;
  weather: weatherType;
  maxTemp: number;
  minTemp: number;
}

const DailyItem: FC<daiyItemPropsType> = ({
  date,
  humidity,
  weather,
  maxTemp,
  minTemp,
}) => {
  const iconWeather =
    weather && require(`../../../../assets/weather/icons/${weather.icon}.png`);
  const iconHumudity = require(`../../../../assets/weather/humidity.jpg`);

  return (
    <Wrapper>
      <DateTime>{moment(date).format("dddd")}</DateTime>
      <Weather>
        <img src={iconWeather?.default} alt={weather?.description} width={40} />
      </Weather>
      <Temp>
        {maxTemp}°/{minTemp}°
      </Temp>
      <Himidity>
        <img
          src={iconHumudity?.default}
          alt={weather?.description}
          width={20}
        />
        {humidity}%
      </Himidity>
    </Wrapper>
  );
};
export default DailyItem;
