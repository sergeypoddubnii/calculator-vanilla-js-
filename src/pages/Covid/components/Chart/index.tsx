import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Container } from "./styledChart";
import moment from "moment";
// interface IChartProps {
//   confirmed: string;
//   deaths: string;
//   date: string;
// }

const Chart: any = ({ dailyData }) => {
  console.log("dailyData", dailyData);
  return (
    <Container>
      <Line
        data={{
          labels: dailyData.map(({ date }) => moment(date).format("MMMM YYYY")),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#3333ff",
            },
            {
              data: dailyData.map((data) => data.deaths),
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

export default Chart;
