import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer, } from "./fasaloReducer";
import { xisoReducer } from "./xisoReducer";
import { maadoReducer } from "./maadoReducer";
import { macalinReducer } from "./macalinReducer";
import { dashboardReducer } from "./dashboardReducer";
import { studentsReducer } from "./studentsReducer";
import { teachersReducer } from "./teachersReducer";
import { employeesReducer } from "./employeesReducer";
import { examsReducer } from "./examsReducer";

const reducers = combineReducers({
  allFasalo: fasaloReducer,
  xiso: xisoReducer,
  maado: maadoReducer,
  macalin: macalinReducer,
  dashboard: dashboardReducer,
  students: studentsReducer,
  teachers: teachersReducer,
  employees: employeesReducer,
  exams: examsReducer,
});
export default reducers;
