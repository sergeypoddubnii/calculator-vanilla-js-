import { LOAD_GLOBAL_COVID, PUT_GLOBAL_COVID } from "./types";

export const loadGlobalCovid = (): any => ({
  type: LOAD_GLOBAL_COVID,
});

export const putGlobalCovid = ({ data }): any => ({
  type: PUT_GLOBAL_COVID,
  payload: data,
});
