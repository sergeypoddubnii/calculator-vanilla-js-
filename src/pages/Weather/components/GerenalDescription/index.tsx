import React from "react";
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

const GeneralDescription = () => {
  const hi = require("../../../../assets/weather/icons/a05d.png");
  return (
    <div>
      <Wrapper>
        <Location>
          <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
          Kiev
        </Location>
        <CurrentDate>пт, 5 лютого 11:27</CurrentDate>
        <TempContainer>
          <Temp>
            <span>-9°</span>
            <img src={hi.default} />
          </Temp>
          <TempDescription>
            <span>Sunny</span>
            <span>fills like -14°</span>
          </TempDescription>
        </TempContainer>
      </Wrapper>
    </div>
  );
};

export default GeneralDescription;
