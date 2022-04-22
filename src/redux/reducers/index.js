import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer, } from "./fasaloReducer";
import { xisoReducer } from "./xisoReducer";
import { maadoReducer } from "./maadoReducer";
import { macalinReducer } from "./macalinReducer";
const reducers = combineReducers({
  allFasalo: fasaloReducer,
  fasal: selectedFasaloReducer,
  xiso: xisoReducer,
  maado: maadoReducer,
  macalin: macalinReducer
});
export default reducers;
