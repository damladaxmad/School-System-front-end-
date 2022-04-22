import { ActionTypes } from "../constants/action-types";
const intialState = {
  macalimiin: []
};

export const macalinReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MACALIMIIN:
      return { ...state, macalimiin: payload };
    default:
      return state;
  }
};

