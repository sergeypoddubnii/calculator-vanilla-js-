import CalcTypes from "./types";

const btnValues = [
  "%",
  "CE",
  "C",
  "back",
  "1/x",
  "x2",
  "squreX",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ",",
  "=",
];

const updateCurrentValue = (state, action) => {
  const currentValue =
    state.currentValue === "0"
      ? action.payload.value
      : `${state.currentValue}${action.payload.value}`;

  return {
    ...state,
    currentValue,
  };
};

const addValueToMemory = (state, action) => {
  const memory = `${state.currentValue}${action.payload.value}`;
  return {
    ...state,
    memory,
  };
};

const CalcReducer = {
  stateKey: "calculator",
  initialState: {
    btnValues,
    currentValue: "0",
    memory: "",
  },
  handlers: {
    [CalcTypes.UPDATE_CURRENT_VALUE]: updateCurrentValue,
    [CalcTypes.ADD_VALUE_TO_MEMORY]: addValueToMemory,
  },
};

export default CalcReducer;
