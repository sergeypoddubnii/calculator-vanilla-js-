export const selectData = (data) => {
  const {
    sunrize,
    sunset,
    ts,
    city_name,
    pres,
    wind_spd,
    wind_cdir_full,
    temp,
    app_temp,
    rh,
    clouds,
    weather,
  } = data;

  return {
    sunrize,
    sunset,
    ts,
    city_name,
    pres,
    windSpeed: wind_spd,
    windDirection: wind_cdir_full,
    temp: temp,
    tempFills: app_temp,
    humidity: rh,
    clouds,
    weather,
  };
};
