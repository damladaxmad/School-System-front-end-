import { ActionTypes } from "../constants/action-types";


const initState = {
  isLogin: false
};


export const isLoginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IS_LOGIN:
      return { ...state, isLogin: payload };
    default:
      return state;
  }
};