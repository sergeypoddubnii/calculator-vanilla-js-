import { getGlobalCovid } from "./actions";
import { getGlobalDataAxios } from "../../api/covid";

export const getGlobalCovidAxios = () => {
  getGlobalDataAxios.then((data) => {
    console.log(data);
    getGlobalCovid(data);
  });
};
