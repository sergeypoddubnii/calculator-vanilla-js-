export { LOAD_GLOBAL_COVID, PUT_GLOBAL_COVID } from "./types";

const addToGlobal = (state, action) => ({
  ...state,
  global: action.payload,
});

const CovidReducer = {
  stateKey: "covid",
  initialState: {
    global: [],
  },
  handlers: {
    PUT_GLOBAL_COVID: addToGlobal,
  },
};

export default CovidReducer;
