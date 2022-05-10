import { ActionTypes } from "../constants/action-types";

export const setExams = (data) => {
  return {
    type: ActionTypes.SET_EXAMS,
    payload: data,
  };
};