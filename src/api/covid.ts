import axios from "axios";

const basicUrl = "https://covid19.mathdro.id/api";

export const loadGlobalDataAxios = (): any => axios.get(basicUrl);
