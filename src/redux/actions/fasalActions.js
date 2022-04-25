import { ActionTypes } from "../constants/action-types";

export const setFasalo = (fasalo) => {
  return {
    type: ActionTypes.SET_FASALO,
    payload: fasalo,
  };
};


