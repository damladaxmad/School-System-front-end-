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

// export const setActiveClass = (activeClass) => {
//   return {
//     type: ActionTypes.SET_ACTIVECLASS,
//     payload: activeClass
//   };
// };

// export const setActiveDay = (activeDay) => {
//   return {
//     type: ActionTypes.SET_ACTIVEDAY,
//     payload: activeDay
//   };
// };


