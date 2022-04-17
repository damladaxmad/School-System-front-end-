import { ActionTypes } from "../constants/action-types";
const intialState = {
  xisooyin: []
};

export const xisoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_XISOOYIN:
      return { ...state, xisooyin: payload };
    default:
      return state;
  }
};

