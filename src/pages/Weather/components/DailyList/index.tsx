import React from "react";
import { useSelector } from "react-redux";
import { getDailyForecast } from "../../../../redux/weather/selectors";
import DailyItem from "../DailyItem/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./styledDailyList";

//types
interface weatherType {
  icon: string;
  description: string;
}

interface dailyForecastType {
  date: string;
  humidity: number;
  weather: weatherType;
  maxTemp: number;
  minTemp: number;
}

const SliderSettings = {
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: false,
};

const DailyList = () => {
  const dailyForecast = useSelector(getDailyForecast);
  const dailyForecastList = dailyForecast.map(
    ({ date, humidity, weather, maxTemp, minTemp }: dailyForecastType) => (
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

  return (
    <Wrapper>
      <Slider {...SliderSettings}>{dailyForecastList}</Slider>
    </Wrapper>
  );
};
export default DailyList;
