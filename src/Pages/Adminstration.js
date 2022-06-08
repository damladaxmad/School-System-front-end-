import React, { useState, useEffect, useReducer } from "react"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Users from "../containers/AdminstrationContainers/UsersContainer/Users"
import Access from "../containers/AdminstrationContainers/AccessContainers/Access";

const Adminstration = () => {

  const statusArr = ["All", "Active", "Inactive"]
    

  const [value, setValue] = React.useState("users");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div
    style={{
      height: "100%",
      width: "95%",
      margin: "0px auto",
      display: "flex",
      gap: "0px",
      flexDirection: "column",
    }}
  >
     <Box sx={{ width: "80%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            disableFocusRipple = {true}
          >
            
       
            <Tab 
            disableFocusRipple = {true}
            disableRipple = {true}
            value="users" label="Users"
            style={{ fontSize: "16px", fontWeight: "700" }} />
            <Tab 
            disableFocusRipple = {true}
            disableRipple = {true}
            value="access" label="Access"
            style={{ fontSize: "16px", fontWeight: "700" }} />
          </Tabs>
        </Box>
    {value == "users" && <Users/>}
    {value == "access" && <Access/>}
    </div>
  );
};

export default Adminstration;
