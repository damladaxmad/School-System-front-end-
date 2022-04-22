import { ActionTypes } from "../constants/action-types";
const intialState = {
  maadooyin: [],

};

export const maadoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MAADOOYIN:
      return { ...state, maadooyin: payload };
  
    default:
      return state;
  }
};

