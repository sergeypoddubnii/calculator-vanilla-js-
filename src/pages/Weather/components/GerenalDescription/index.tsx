import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  Location,
  CurrentDate,
  TempContainer,
  Temp,
  TempDescription,
} from "./styledGeneralDescription";
import { useSelector } from "react-redux";
import {
  getCurrentWeather,
  getHourlyForecast,
} from "../../../../redux/weather/selectors";
import HourlyForecastItem from "../HourlyForecastItem/HourlyForecastItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GeneralDescription = () => {
  const { city_name, temp, tempFills, ob_time, weather } = useSelector(
    getCurrentWeather
  );
  const hourlyForecastData = useSelector(getHourlyForecast);

  //load icon
  const icon =
    weather && require(`../../../../assets/weather/icons/${weather.icon}.png`);

  const hourlyForecast = hourlyForecastData.map(
    ({ temp, tempFills, weather, humidity, time }: any): any => (
      <HourlyForecastItem
        key={humidity}
        temp={temp}
        tempFills={tempFills}
        weather={weather}
        humidity={humidity}
        time={time}
      />
    )
  );

  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <div>
      <Wrapper>
        <Location>
          <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
          {city_name}
        </Location>
        <CurrentDate>{moment(ob_time).format("MMM Do YYYY")}</CurrentDate>
        <TempContainer>
          <Temp>
            <span>{temp}&#8451;</span>
            <img src={icon?.default} alt={weather?.description} width={80} />
          </Temp>
          <TempDescription>
            <span>{weather?.description}</span>
            <span>fills like {tempFills}°</span>
          </TempDescription>
        </TempContainer>
        <Slider {...settings}>{hourlyForecast}</Slider>
      </Wrapper>
    </div>
  );
};

export default GeneralDescription;
