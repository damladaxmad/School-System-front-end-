import { ActionTypes } from "../constants/action-types";


export const setFeeCharges = (data) => {
  return {
    type: ActionTypes.SET_FEE_CHARGES,
    payload: data,
  };
};