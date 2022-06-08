import { ActionTypes } from "../constants/action-types";
const intialState = {
    fetchers: {
        fetchStudents: false
    }
};

export const fetchersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_STUDENTS:
        return { ...state, fetchers: {fetchStudents: true} };
    default:
      return state;
  }
};