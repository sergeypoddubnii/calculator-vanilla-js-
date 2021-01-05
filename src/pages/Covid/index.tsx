import React, { useEffect } from "react";
import { getGlobalCovidState, getDailyCovidState } from "../../redux/covid/selectors";
import { loadGlobalCovid, loadDailyCovid } from "../../redux/covid/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";

const Covid = () => {
  const dispatch = useDispatch();
  const { confirmed, recovered, deaths, lastUpdate } = useSelector(getGlobalCovidState);
  const dailyCovid = useSelector(getDailyCovidState);
  console.log(dailyCovid);

  useEffect(() => {
    dispatch(loadGlobalCovid());
    dispatch(loadDailyCovid());
  }, [dispatch]);

  return (
    <div>
      <h1>Covid 19</h1>
      <Container>
        <Card title="confirmed" value={confirmed} date={new Date(lastUpdate).toDateString()} />
        <Card title="recovered" value={recovered} date={new Date(lastUpdate).toDateString()} />
        <Card title="deaths" value={deaths} date={new Date(lastUpdate).toDateString()} />
      </Container>
    </div>
  );
};

export default Covid;
