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
import { getCurrentWeather } from "../../../../redux/weather/selectors";

const GeneralDescription = () => {
  const { city_name, temp, tempFills, ob_time, weather } = useSelector(
    getCurrentWeather
  );

  //load icon
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
      </Wrapper>
    </div>
  );
};

export default GeneralDescription;
