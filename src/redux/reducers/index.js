import { combineReducers } from "redux";
import { fasaloReducer, selectedFasaloReducer, } from "./fasaloReducer";
import { xisoReducer } from "./xisoReducer";
import { maadoReducer } from "./maadoReducer";
import { macalinReducer } from "./macalinReducer";
import { dashboardReducer } from "./dashboardReducer";
import { studentsReducer } from "./studentsReducer";
import { teachersReducer } from "./teachersReducer";
import { usersReducer } from "./usersReducer";
import { activeUserReducer } from "./activeUserReducer";
import { employeesReducer } from "./employeesReducer";
import { examsReducer } from "./examsReducer";
import { feesReducer } from "./feesReducer";

const reducers = combineReducers({
  allFasalo: fasaloReducer,
  xiso: xisoReducer,
  maado: maadoReducer,
  macalin: macalinReducer,
  dashboard: dashboardReducer,
  students: studentsReducer,
  teachers: teachersReducer,
  users: usersReducer,
  activeUser: activeUserReducer,
  employees: employeesReducer,
  exams: examsReducer,
  fees: feesReducer,
});
export default reducers;
