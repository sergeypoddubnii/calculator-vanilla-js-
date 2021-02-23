import React from "react";
import { Wrapper } from "./styledDailyList";
import { useSelector } from "react-redux";
import { getDailyForecast } from "../../../../redux/weather/selectors";
import DailyItem from "../DailyItem/index";

const DailyList = () => {
  const dailyForecast = useSelector(getDailyForecast);
  const dailyForecastList = dailyForecast.map(
    ({ date, humidity, weather, maxTemp, minTemp }: any): any => (
      <DailyItem
        key={date}
        humidity={humidity}
        weather={weather}
        maxTemp={maxTemp}
        minTemp={minTemp}
        date={date}
      />
    )
  );
  return <Wrapper>{dailyForecastList}</Wrapper>;
};
export default DailyList;
