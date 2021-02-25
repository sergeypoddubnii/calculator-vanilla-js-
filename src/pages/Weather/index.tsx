import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfoGeolocation } from "../../redux/weather/actions";
import Form from "./components/Form";
import GeneralDescription from "./components/GerenalDescription/index";
import DailyList from "./components/DailyList";
import AdditionalDescription from "./components/AdditionalDescription/AdditionalDescription";

const Weather = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition({ coords }) {
      console.log(coords.latitude, coords.longitude);
      dispatch(getInfoGeolocation(coords.latitude, coords.longitude));
    }
  }, [dispatch]);

  return (
    <>
      <Form />
      <GeneralDescription />
      <DailyList />
      <AdditionalDescription />
    </>
  );
};

export default Weather;
