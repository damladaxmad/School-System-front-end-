import { ActionTypes } from "../constants/action-types";
const intialState = {
  teachers: []
};

export const teachersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TEACHERS:
      return { ...state, teachers: payload };
    default:
      return state;
  }
};