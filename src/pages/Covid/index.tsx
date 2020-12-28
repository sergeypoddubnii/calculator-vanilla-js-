import React from "react";
import { getGlobalCovidAxios } from "../../redux/covid/operations";
import { Container } from "./covidStyled";
import Card from "./components/Card/index";

const Covid = () => {
  getGlobalCovidAxios();
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
