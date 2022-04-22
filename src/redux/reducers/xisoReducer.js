import { ActionTypes } from "../constants/action-types";
const intialState = {
  xisooyin: [],
  newPeriods: []
};

export const xisoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_XISOOYIN:
      return { ...state, xisooyin: payload };
    case ActionTypes.SET_NEW_PERIODS:
      return { ...state, newPeriods: payload };
    default:
      return state;
  }
};

