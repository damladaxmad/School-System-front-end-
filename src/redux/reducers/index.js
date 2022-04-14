import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer } from "./fasaloReducer";
const reducers = combineReducers({
  allFasalo: fasaloReducer,
  fasal: selectedFasaloReducer,
});
export default reducers;
