import { ActionTypes } from "../constants/action-types";

export const setXisooyin = (xisooyin) => {
  return {
    type: ActionTypes.SET_XISOOYIN,
    payload: xisooyin
  };
};


