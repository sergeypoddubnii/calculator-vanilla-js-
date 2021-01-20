import React from "react";
import { useSelector } from "react-redux";
import { getMonthGlobalCovid } from "../../../../redux/covid/selectors";
import { Line } from "react-chartjs-2";
import { Container } from "./styledChart";
import moment from "moment";

const TotalChart = () => {
  const data = useSelector(getMonthGlobalCovid);
  return (
    <Container>
      <Line
        data={{
          labels: data.map(({ date }) => moment(date).format("MMMM YYYY")),
          datasets: [
            {
              data: data.map((data) => data.confirmed),
              label: "Confirmed",
              borderColor: "#3333ff",
            },
            {
              data: data.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
            },
          ],
        }}
      />
    </Container>
  );
};

export default TotalChart;
