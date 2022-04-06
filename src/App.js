import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Customers from "./Pages/Students";
import Lends from "./Pages/Classes";
import Layout from "./containers/layout";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#F0F2FA"}}>
      <Router>
      <Layout>
          <Routes>
            <Route path= "/dashboard" element = {<Dashboard/>} />
            <Route path= "/students" element = {<Customers/>} />
            <Route path= "/classes" element = {<Lends/>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
