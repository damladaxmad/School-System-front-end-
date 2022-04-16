import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Customers from "./Pages/Students";
import Lends from "./Pages/Classes";
import Layout from "./containers/layout";
import Finance from "./Pages/Finance";
import Examinantion from "./Pages/Examination";
import Adminstration from "./Pages/Adminstration";
import SettingsFile from "./Pages/SettingsFile";
import Schedules from "./Pages/Schedules";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#F0F2FA"}}>
      <Router>
      <Layout>
          <Routes>
            <Route path= "/dashboard" element = {<Dashboard/>} />
            <Route path= "/students" element = {<Customers/>} />
            <Route path= "/classes" element = {<Lends/>} />
            <Route path= "/finance" element = {<Finance/>} />
            <Route path= "/examination" element = {<Examinantion/>} />
            <Route path= "/adminstration" element = {<Adminstration/>} />
            <Route path= "/settings" element = {<SettingsFile/>} />
            <Route path= "/schedules" element = {<Schedules/>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
