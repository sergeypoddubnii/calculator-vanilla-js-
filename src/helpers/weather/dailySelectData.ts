export const dailySelectData = (data) => {
  return data.map((day) => {
    const { max_temp, min_temp, rh, weather, datetime } = day;
    return {
      maxTemp: Math.round(max_temp),
      minTemp: Math.round(min_temp),
      humidity: rh,
      weather,
      date: datetime,
    };
  });
};
