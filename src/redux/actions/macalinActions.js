import { ActionTypes } from "../constants/action-types";

export const setMacalimiin = (macalimiin) => {
  return {
    type: ActionTypes.SET_MACALIMIIN,
    payload: macalimiin
  };
};


