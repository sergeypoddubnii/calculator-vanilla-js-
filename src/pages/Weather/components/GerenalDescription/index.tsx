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
        key={time}
        temp={temp}
        tempFills={tempFills}
        weather={weather}
        humidity={humidity}
        time={time}
      />
    )
  );
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
            <span>{temp}°</span>
            <img src={icon?.default} alt={weather?.description} width={80} />
          </Temp>
          <TempDescription>
            <span>{weather?.description}</span>
            <span>fills like {tempFills}°</span>
          </TempDescription>
        </TempContainer>
        {hourlyForecast}
      </Wrapper>
    </div>
  );
};

export default GeneralDescription;
