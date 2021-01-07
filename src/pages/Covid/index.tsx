import React, { useEffect } from "react";
import { getGlobalCovidState, getDailyCovidState } from "../../redux/covid/selectors";
import { loadGlobalCovid, loadDailyCovid } from "../../redux/covid/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";
import Chart from "./components/Chart";
import { addSpaceBetweenNumber } from "../../helpers/covid/addSpaceBetweenNumber";

const Covid = () => {
  const dispatch = useDispatch();
  const { confirmed, recovered, deaths, lastUpdate } = useSelector(getGlobalCovidState);
  const dailyCovid = useSelector(getDailyCovidState);

  useEffect(() => {
    dispatch(loadGlobalCovid());
    dispatch(loadDailyCovid());
  }, [dispatch]);

  return (
    <div>
      <h1>Covid 19</h1>
      <Container>
        <Card
          title="confirmed"
          value={addSpaceBetweenNumber(confirmed)}
          date={moment(lastUpdate).format("MMMM Do YYYY")}
        />
        <Card
          title="recovered"
          value={addSpaceBetweenNumber(recovered)}
          date={moment(lastUpdate).format("MMMM Do YYYY")}
        />
        <Card title="deaths" value={addSpaceBetweenNumber(deaths)} date={moment(lastUpdate).format("MMMM Do YYYY")} />
      </Container>
      <Chart dailyData={dailyCovid} />
    </div>
  );
};

export default Covid;
