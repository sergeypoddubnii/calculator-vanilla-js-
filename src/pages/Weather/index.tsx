import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfoGeolocation } from "../../redux/weather/actions";
import Form from "./components/Form";
import GeneralDescription from "./components/GerenalDescription/index";

const Weather = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(getPosition));
    }
    function getPosition({ coords }) {
      console.log(coords);
      console.log("location");
      dispatch(getInfoGeolocation(coords.latitude, coords.longitude));
    }
  }, []);

  return (
    <>
      <Form />
      <GeneralDescription />
    </>
  );
};

export default Weather;
