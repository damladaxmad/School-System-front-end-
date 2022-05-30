import { ActionTypes } from "../constants/action-types";
const intialState = {
  exams: [],
  examCharges: []
};

export const examsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EXAMS:
      return { ...state, exams: payload };
      case ActionTypes.SET_EXAM_CHARGES:
        return { ...state, examCharges: payload };
    default:
      return state;
  }
};