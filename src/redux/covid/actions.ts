import { GET_GLOBAL_COVID } from "./types";

export const getGlobalCovid = (data) => ({
  type: GET_GLOBAL_COVID,
  payload: data,
});
