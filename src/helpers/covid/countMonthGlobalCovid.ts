import moment from "moment";

export const countMonthGlobalCovid = (data) => {
  let date = "January 2020";
  let arr = [];
  const monthGlobalData = data.reduce((acc, item) => {
    if (moment(item.date).format("MMMM YYYY") === date) {
      arr.push(item);
    } else {
      date = moment(item.date).format("MMMM YYYY");
      acc.push(arr.pop());
      arr = [];
      arr.push(item);
    }
    return acc;
  }, []);

  return monthGlobalData;
};
