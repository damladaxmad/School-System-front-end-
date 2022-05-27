import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Adminstration = () => {

  const [value, setValue] = React.useState("one");

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
      gap: "14px",
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
              value="one"
              label="Classes"
              style={{ fontSize: "16px", fontWeight: "700" }}
            />
            <Tab 
            disableFocusRipple = {true}
            disableRipple = {true}
            value="two" label="Students"
            style={{ fontSize: "16px", fontWeight: "700" }} />
          </Tabs>
        </Box>
    </div>
  );
};

export default Adminstration;
