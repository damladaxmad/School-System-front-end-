import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import FinanceContainer from "../containers/FinanceContainers/FinanceContainer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Finance() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const classes = ["Form1", "Form2", "Form3", "Form4", "Form5", "Form5"]

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <MdAdd
              style={{
                color: "white",
              }}
            />
          }
        >
          Add New Payment
        </Button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {value == "one" ? classes.map((c) => (
          <FinanceContainer />
        )) : null}
        
      </div>
    </div>
  );
}

export default Finance;
