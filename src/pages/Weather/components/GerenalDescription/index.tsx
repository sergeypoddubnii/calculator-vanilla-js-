import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getCurrentWeather } from "../../../../redux/weather/selectors";
import {
  Wrapper,
  Location,
  CurrentDate,
  TempContainer,
  Temp,
  TempDescription,
  AddIndicators,
  AddIndicator,
  ItemTitle,
  ItemValue,
} from "./styledGeneralDescription";

const GeneralDescription = () => {
  const {
    city_name,
    temp,
    tempFills,
    ob_time,
    weather,
    humidity,
    sunrise,
    sunset,
    windSpeed,
    windDirection,
  } = useSelector(getCurrentWeather);
  //icons
  const iconHumudity = require(`../../../../assets/weather/humidity.jpg`);
  const iconSunrise = require(`../../../../assets/weather/sunrise.png`);
  const iconSunset = require(`../../../../assets/weather/sunset.png`);
  const iconWind = require(`../../../../assets/weather/wind.png`);
  //load icon weather
  const icon =
    weather && require(`../../../../assets/weather/icons/${weather.icon}.png`);
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
        <AddIndicators>
          <AddIndicator>
            <ItemTitle>
              <img
                src={iconSunrise?.default}
                alt={iconSunrise?.description}
                width={20}
              />
              <span>Sunrise</span>
            </ItemTitle>
            <ItemValue>{sunrise}</ItemValue>
          </AddIndicator>
          <AddIndicator>
            <ItemTitle>
              <img
                src={iconSunset?.default}
                alt={iconSunset?.description}
                width={20}
              />
              <span>Sunset</span>
            </ItemTitle>
            <ItemValue>{sunset}</ItemValue>
          </AddIndicator>
          <AddIndicator>
            <ItemTitle>
              <img
                src={iconWind?.default}
                alt={iconWind?.description}
                width={20}
              />
              Wind speed({windDirection})
            </ItemTitle>
            <ItemValue>{windSpeed}m/s</ItemValue>
          </AddIndicator>
          <AddIndicator>
            <ItemTitle>
              <img
                src={iconHumudity?.default}
                alt={iconHumudity?.description}
                width={20}
              />
              <span>Humidity</span>
            </ItemTitle>
            <ItemValue>{humidity}%</ItemValue>
          </AddIndicator>
        </AddIndicators>
      </Wrapper>
    </div>
  );
};

export default GeneralDescription;
