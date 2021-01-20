export const countPerMonthCovid = (data) => {
  let prevValue = {
    confirmed: 0,
    deaths: 0,
  };

  const perMonthCovid = data.reduce((acc, month) => {
    const elem = {
      confirmed: month.confirmed - prevValue.confirmed,
      deaths: month.deaths - prevValue.deaths,
      date: month.date,
    };
    acc.push(elem);
    prevValue = {
      confirmed: month.confirmed,
      deaths: month.deaths,
    };
    return acc;
  }, []);
  return perMonthCovid;
};
