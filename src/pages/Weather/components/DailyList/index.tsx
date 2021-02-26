import React from "react";
import { Wrapper } from "./styledDailyList";
import { useSelector } from "react-redux";
import { getDailyForecast } from "../../../../redux/weather/selectors";
import DailyItem from "../DailyItem/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <Wrapper>
      <Slider {...settings}>{dailyForecastList}</Slider>
    </Wrapper>
  );
};
export default DailyList;
