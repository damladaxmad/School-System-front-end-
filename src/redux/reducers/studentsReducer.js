import { ActionTypes } from "../constants/action-types";
const intialState = {
  students: []
};

export const studentsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
};