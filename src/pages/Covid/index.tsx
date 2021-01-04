import React, { useEffect } from "react";
import { getGlobalCovidState } from "../../redux/covid/selectors";
import { loadGlobalCovid } from "../../redux/covid/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";

const Covid = () => {
  const dispatch = useDispatch();
  const globalCovid = useSelector(getGlobalCovidState);

  useEffect(() => dispatch(loadGlobalCovid()), [dispatch]);

  return (
    <div>
      <h1>Covid 19</h1>
      <Container>
        <Card title="confirmed" value={globalCovid?.confirmed?.value} />
        <Card title="recovered" value={globalCovid?.recovered?.value} />
        <Card title="deaths" value={globalCovid?.deaths?.value} />
      </Container>
    </div>
  );
};

export default Covid;
