import { ActionTypes } from "../constants/action-types";

export const setXisooyin = (xisooyin) => {
  return {
    type: ActionTypes.SET_XISOOYIN,
    payload: xisooyin
  };
};

export const setNewPeriods = (newPeriods) => {
  return {
    type: ActionTypes.SET_NEW_PERIODS,
    payload: newPeriods
  };
};




