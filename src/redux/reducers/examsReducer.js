import { ActionTypes } from "../constants/action-types";
const intialState = {
  exams: []
};

export const examsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EXAMS:
      return { ...state, exams: payload };
    default:
      return state;
  }
};