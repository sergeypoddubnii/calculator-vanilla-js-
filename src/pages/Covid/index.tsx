import React, { useEffect } from "react";
import { getGlobalCovidState } from "../../redux/covid/selectors";
import { loadGlobalCovid } from "../../redux/covid/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";

const Covid = () => {
  const dispatch = useDispatch();
  const { confirmed, recovered, deaths, lastUpdate } = useSelector(getGlobalCovidState);

  useEffect(() => dispatch(loadGlobalCovid()), [dispatch]);

  return (
    <div>
      <h1>Covid 19</h1>
      <Container>
        <Card title="confirmed" value={confirmed?.value} date={new Date(lastUpdate).toDateString()} />
        <Card title="recovered" value={recovered?.value} date={new Date(lastUpdate).toDateString()} />
        <Card title="deaths" value={deaths?.value} date={new Date(lastUpdate).toDateString()} />
      </Container>
    </div>
  );
};

export default Covid;
