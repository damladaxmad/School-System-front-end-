import { ActionTypes } from "../constants/action-types";
const intialState = {
  fasalo: [],
};

export const fasaloReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FASALO:
      return { ...state, fasalo: payload };
    default:
      return state;
  }
};

export const selectedFasaloReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_FASAL:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_FASAL:
      return {};
    default:
      return state;
  }
};
