import { ActionTypes } from "../constants/action-types";

export const setMaadooyin = (maadooyin) => {
  return {
    type: ActionTypes.SET_MAADOOYIN,
    payload: maadooyin
  };
};


