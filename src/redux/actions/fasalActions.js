import { ActionTypes } from "../constants/action-types";

export const setFasalo = (fasalo) => {
  return {
    type: ActionTypes.SET_FASALO,
    payload: fasalo,
  };
};

export const selectedFasal = (fasal) => {
  return {
    type: ActionTypes.SELECTED_FASAL,
    payload: fasal,
  };
};
export const removeSelectedFasal = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_FASAL,
  };
};
