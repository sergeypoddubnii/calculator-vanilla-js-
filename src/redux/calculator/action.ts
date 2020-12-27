import CalcTypes from "./types";

export const updateCurrentValue = (value) => ({
  payload: { value },
  type: CalcTypes.UPDATE_CURRENT_VALUE,
});

export const addValueToMemory = (value) => ({
  payload: { value },
  type: CalcTypes.ADD_VALUE_TO_MEMORY,
});
