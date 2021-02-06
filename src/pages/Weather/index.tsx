import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfoGeolocation } from "../../redux/weather/actions";
import Form from "./components/Form";
import GeneralDescription from "./components/GerenalDescription/index";

const Weather = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      dispatch(
        getInfoGeolocation(position.coords.latitude, position.coords.longitude)
      );
    }
  }, [dispatch]);

  return (
    <>
      <Form />
      <GeneralDescription />
    </>
  );
};

export default Weather;
