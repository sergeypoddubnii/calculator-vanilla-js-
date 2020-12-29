import React, { useEffect } from "react";
// import { getGlobalCovidAxios } from "../../redux/covid/operations";
// import { getGlobalCovidState } from "../../redux/covid/selectors";
// import { useDispatch, useSelector } from "react-redux";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";

const Covid = () => {
  // const dispatch = useDispatch();
  // const globalCovid = useSelector(getGlobalCovidState);

  // useEffect(() => dispatch(getGlobalCovidAxios), []);

  return (
    <div>
      <h1>Covid 19</h1>
      <Container>
        <Card title="confirmed" value="500" />
        <Card title="recovered" value="500" />
        <Card title="deaths" value="500" />
      </Container>
    </div>
  );
};

export default Covid;
