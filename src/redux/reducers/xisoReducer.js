import { ActionTypes } from "../constants/action-types";
const intialState = {
  xisooyin: [],
  newPeriods: [],
  updatedPeriods: []
};

export const xisoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_XISOOYIN:
      return { ...state, xisooyin: payload };
    case ActionTypes.SET_NEW_PERIODS:
      return { ...state, newPeriods: [...state.newPeriods, payload] };
    case ActionTypes.SET_UPDATED_PERIODS:
      return { ...state, updatedPeriods: [...state.updatedPeriods, payload] };
    case ActionTypes.EMPTY_UPDATED_PERIODS:
      return { ...state, updatedPeriods: null };
    default:
      return state;
  }
};

