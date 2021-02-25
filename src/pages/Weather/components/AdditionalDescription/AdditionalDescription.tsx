import React from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  List,
  ListItem,
  ItemTitle,
  ItemValue,
} from "./styledAdditionalDescription";
import { getCurrentWeather } from "../../../../redux/weather/selectors";

const AdditionalDescription = () => {
  const { humidity, sunrise, sunset, windSpeed, windDirection } = useSelector(
    getCurrentWeather
  );
  const iconHumudity = require(`../../../../assets/weather/humidity.jpg`);
  const iconSunrise = require(`../../../../assets/weather/sunrise.png`);
  const iconSunset = require(`../../../../assets/weather/sunset.png`);
  const iconWind = require(`../../../../assets/weather/wind.png`);
  return (
    <Wrapper>
      <List>
        <ListItem>
          <ItemTitle>
            <img
              src={iconSunrise?.default}
              alt={iconSunrise?.description}
              width={20}
            />
            <span>Sunrise</span>
          </ItemTitle>
          <ItemValue>{sunrise}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemTitle>
            <img
              src={iconSunset?.default}
              alt={iconSunset?.description}
              width={20}
            />
            <span>Sunset</span>
          </ItemTitle>
          <ItemValue>{sunset}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemTitle>
            <img
              src={iconWind?.default}
              alt={iconWind?.description}
              width={20}
            />
            Wind speed({windDirection})
          </ItemTitle>
          <ItemValue>{windSpeed}m/s</ItemValue>
        </ListItem>
        <ListItem>
          <ItemTitle>
            <img
              src={iconHumudity?.default}
              alt={iconHumudity?.description}
              width={20}
            />
            <span>Humidity</span>
          </ItemTitle>
          <ItemValue>{humidity}%</ItemValue>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default AdditionalDescription;
