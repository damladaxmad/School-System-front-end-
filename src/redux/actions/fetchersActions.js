import { ActionTypes } from "../constants/action-types";


export const fetchStudentsRedux = (data) => {
  return {
    type: ActionTypes.FETCH_STUDENTS,
    payload: data,
  };
};