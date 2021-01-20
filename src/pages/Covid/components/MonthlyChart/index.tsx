import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./styledChart";
import { useSelector } from "react-redux";
import { getPerMonthCovid } from "../../../../redux/covid/selectors";
import moment from "moment";

const MonthlyChart = () => {
  const data = useSelector(getPerMonthCovid);
  return (
    <Container>
      <Bar
        data={{
          labels: data.map(({ date }) => moment(date).format("MMMM YYYY")),
          datasets: [
            {
              data: data.map((data) => data.confirmed),
              label: "Confirmed",
              backgroundColor: "blue",
            },
            {
              data: data.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
            },
          ],
        }}
      />
    </Container>
  );
};

export default MonthlyChart;
