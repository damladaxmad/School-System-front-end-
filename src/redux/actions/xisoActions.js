import { ActionTypes } from "../constants/action-types";

export const setXisooyin = ( fasal, xisooyin) => {
  return {
    type: ActionTypes.SET_XISOOYIN,
    payload: {fasal: fasal, xisooyin: xisooyin},
  };
};


