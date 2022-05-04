import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer, } from "./fasaloReducer";
import { xisoReducer } from "./xisoReducer";
import { maadoReducer } from "./maadoReducer";
import { macalinReducer } from "./macalinReducer";
import { dashboardReducer } from "./dashboardReducer";
import { studentsReducer } from "./studentsReducer";

const reducers = combineReducers({
  allFasalo: fasaloReducer,
  xiso: xisoReducer,
  maado: maadoReducer,
  macalin: macalinReducer,
  dashboard: dashboardReducer,
  students: studentsReducer,
});
export default reducers;
