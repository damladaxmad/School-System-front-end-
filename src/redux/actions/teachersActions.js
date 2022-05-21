import { ActionTypes } from "../constants/action-types";

export const setTeachers = (data) => {
  return {
    type: ActionTypes.SET_TEACHERS,
    payload: data,
  };
};