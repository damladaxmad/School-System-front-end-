import { Typography } from "@material-ui/core";
import React from "react";
import Chart from "../containers/DashboardContainers/Chart";
import QuickActions from "../containers/DashboardContainers/QuickActions";
import StatCard from "../containers/DashboardContainers/StatCard";
import UpdateStudents from "../containers/DashboardContainers/UpdateStudents";


const Dashboard = () => {
  const stats = [
    { value: "$10.89k", title: "salary", id: 1 },
    { value: "$5.77k", title: "income", id: 2 },
    { value: "$67.98k", title: "salary", id: 1 },
    { value: "$89.90k", title: "income", id: 2 },
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
        flexDirection: "column",
      }}
    >
      <h2> Dashboard</h2>
      <div style={{ display: "flex", gap: "12px", width: "100%" }}>
        {stats.map((stat) => (
          <StatCard value={stat} key={stat.id} />
        ))}
      </div>
      <Chart />
      <div style={{ display: "flex", gap: "30px"}}>
      <QuickActions />
     <UpdateStudents/>
      </div>  
      
    </div>
  );
};

export default Dashboard;
