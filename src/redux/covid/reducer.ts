export { GET_GLOBAL_COVID } from "./types";

const addToGlobal = (state, action) => ({
  ...state,
  ...(state.global = action.payload),
});

const CovidReducer = {
  stateKey: "covid",
  initialState: {
    global: [],
  },
  handlers: {
    GET_GLOBAL_COVID: addToGlobal,
  },
};

export default CovidReducer;
