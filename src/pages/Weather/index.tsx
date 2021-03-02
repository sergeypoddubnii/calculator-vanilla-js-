import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoGeolocation } from "../../redux/weather/actions";
import { getCurrentWeather } from "../../redux/weather/selectors";
import Form from "./components/Form";
import GeneralDescription from "./components/GerenalDescription/index";
import DailyList from "./components/DailyList";

const Weather = () => {
  const currentWeather = useSelector(getCurrentWeather);
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition({ coords }) {
      dispatch(getInfoGeolocation(coords.latitude, coords.longitude));
    }
  }, [dispatch]);

  return (
    <>
      <Form />
      {Object.keys(currentWeather).length !== 0 && (
        <>
          <GeneralDescription />
          <DailyList />
        </>
      )}
    </>
  );
};

export default Weather;
