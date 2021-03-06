import React, {useState,useEffect} from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Customers from "./Pages/Students";
import Lends from "./Pages/Classes";
import Layout from "./containers/layout";
import Fees from "./Pages/Fees";
import Examinantion from "./Pages/Examination";
import Adminstration from "./Pages/Adminstration";
import SettingsPage from "./Pages/SettingsPage";
import Schedules from "./Pages/Schedules";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setFasalo } from "./redux/actions/fasalActions";
import { setMaadooyin } from "./redux/actions/maadoActions";
import { setMacalimiin } from "./redux/actions/macalinActions";
import SignupAndLogin from "./SignupAndLogin/SignupAndLogin";
import "./App.css"
import Teachers from "./Pages/Teachers";
import Admission from "./Pages/Admission";
import Employees from "./Pages/Employees";
import Reports from "./Pages/Reports";
import { useSelector } from "react-redux";

const pages = [
<Route path= "/dashboard" element = {<Dashboard/>} />,
<Route path= "/students" element = {<Customers/>} />,
     <Route path= "/teachers" element = {<Teachers/>} />,
     <Route path= "/classes" element = {<Lends/>} />,
     <Route path= "/fees" element = {<Fees/>} />,
     <Route path= "/emplooyees" element = {<Employees/>} />,
     <Route path= "/examination" element = {<Examinantion/>} />,
     <Route path= "/adminstration" element = {<Adminstration/>} />,
     <Route path= "/settings" element = {<SettingsPage/>} />,
     <Route path= "/admission" element = {<Admission/>} />,
     <Route path= "/schedules" element = {<Schedules />} />,
     
]

function App() {

  const isLogin = useSelector(state => state.isLogin.isLogin)
  const isReports = useSelector(state => state.isLogin.isReports)
  const [showLayout, setShowLayout] = useState(isLogin)
  const [showReports, setShowReports] = useState(isReports)
  const dispatch = useDispatch();

  const fetchFasalo = async () => {
    const response = await axios
      .get("/api/v1/classes")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
    dispatch(setFasalo(response.data.data.classes));
  };

  const fetchMaadooyin = async () => {
    const response = await axios
      .get("/api/v1/courses")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
    dispatch(setMaadooyin(response.data.data.courses));
  }; 

  const fetchMacalimiin = async () => {
    const response = await axios
      .get("/api/v1/teachers")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setMacalimiin(response.data.data.teachers));
  };

  const showHandler = () => {
    setShowLayout(true)
  }


  useEffect(() => {
    fetchFasalo();
    fetchMaadooyin();
    fetchMacalimiin(); 
  }, []);

  useEffect(()=> {
    setShowLayout(isLogin)
    setShowReports(isReports)
  }, [isLogin, isReports])

  return (
    

   <div className="App" style={{backgroundColor: "#F0F2FA", display: "flex",
   justifyContent: "center",}}>
      <Router>
    {!showLayout && 
    <Route path= "/signup" element = {<SignupAndLogin
    showHandler = {showHandler}/>} />}
   {showReports && <Route path= "/reports" element = {<Reports />} />}
      {showLayout && !showReports && <Layout>
          <Routes>
            {pages.map(page => (
              page
            ))}
          </Routes>
        </Layout>}
      </Router>
    </div>
         
  );
}

export default App;
