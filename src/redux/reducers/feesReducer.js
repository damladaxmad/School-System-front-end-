import { ActionTypes } from "../constants/action-types";
const intialState = {
  feeCharges: []
};

export const feesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FEE_CHARGES:
        return { ...state, feeCharges: payload };
    default:
      return state;
  }
};