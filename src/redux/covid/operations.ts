import { getGlobalCovid } from "./actions";
import { getGlobalDataAxios } from "../../api/covid";

export const getGlobalCovidAxios = () => (dispatch) => {
  getGlobalDataAxios.then((data) => {
    console.log(data);
    dispatch(getGlobalCovid(data));
  });
};
