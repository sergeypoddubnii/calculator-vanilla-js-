import moment from "moment";

export const getMonthGlobalCovid = (data) => {
  let date = "January 2020";
  let perMonthData = {};
  let deaths = 0;
  let confirmed = 0;
  let arrIndx = 0;
  const monthGlobalData = data.reduce((acc, item) => {
    if (moment(item.date).format("MMMM YYYY") === date) {
      confirmed = confirmed + item.confirmed;
      deaths = deaths + item.deaths;
      perMonthData["confirmed"] = confirmed;
      perMonthData["deaths"] = deaths;
      perMonthData["date"] = date;
      acc[arrIndx] = perMonthData;
    } else {
      date = moment(item.date).format("MMMM YYYY");
      perMonthData = {};
      confirmed = 0;
      deaths = 0;
      confirmed = confirmed + item.confirmed;
      deaths = deaths + item.deaths;
      perMonthData["confirmed"] = confirmed;
      perMonthData["deaths"] = deaths;
      perMonthData["date"] = date;
      arrIndx = arrIndx + 1;
      acc[arrIndx] = perMonthData;
    }
    return acc;
  }, []);

  let perMonthData1 = [];
  let indx = 0;

  return monthGlobalData;
};
