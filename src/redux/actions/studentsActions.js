import { ActionTypes } from "../constants/action-types";

export const setStudents = (data) => {
  return {
    type: ActionTypes.SET_STUDENTS,
    payload: data,
  };
};