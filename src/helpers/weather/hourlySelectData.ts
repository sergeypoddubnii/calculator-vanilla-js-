export const hourlySelectData = (data) => {
  return data.map((hour) => {
    const { temp, rh, weather, timestamp_local } = hour;
    return {
      temp: Math.round(temp),
      humidity: rh,
      weather,
      time: timestamp_local,
    };
  });
};
