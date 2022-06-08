import { ActionTypes } from "../constants/action-types";


export const setIsLogin = (data) => {
  return {
    type: ActionTypes.SET_IS_LOGIN,
    payload: data,
  };
};