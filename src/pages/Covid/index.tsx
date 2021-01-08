import React, { useEffect, useState } from "react";
import { getGlobalCovidState } from "../../redux/covid/selectors";
import { loadGlobalCovid, loadDailyCovid } from "../../redux/covid/actions";
import { useDispatch, useSelector } from "react-redux";
import { addSpaceBetweenNumber } from "../../helpers/covid/addSpaceBetweenNumber";
import { Container, Button, ButtonWrapper } from "./covidStyled";
import Card from "./components/Card/index";
import TotalChart from "./components/TotalChart";
import MonthlyChart from "./components/MonthlyChart";
import moment from "moment";

const Covid = () => {
  const dispatch = useDispatch();
  const { confirmed, recovered, deaths, lastUpdate } = useSelector(getGlobalCovidState);
  const [chart, setChart] = useState(true);

  useEffect(() => {
    dispatch(loadGlobalCovid());
    dispatch(loadDailyCovid());
  }, [dispatch]);

  const handlerTotalChart = () => {
    setChart(true);
  };
  const handlerMonthlyChart = () => {
    setChart(false);
  };

  return (
    <div>
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
      <ButtonWrapper>
        <Button onClick={handlerTotalChart}>total confirmed covid</Button>
        <Button onClick={handlerMonthlyChart}>monthly confirmed covid</Button>
      </ButtonWrapper>
      {chart ? <TotalChart /> : <MonthlyChart />}
    </div>
  );
};

export default Covid;
