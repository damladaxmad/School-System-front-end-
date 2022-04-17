import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer, } from "./fasaloReducer";
import { xisoReducer } from "./xisoReducer";
const reducers = combineReducers({
  allFasalo: fasaloReducer,
  fasal: selectedFasaloReducer,
  xiso: xisoReducer,
});
export default reducers;
