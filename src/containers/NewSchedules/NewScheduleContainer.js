import React, { useState, useEffect, useMemo } from "react";
import { forwardRef,  useImperativeHandle } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider } from "@mui/material";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import CustomSelect from "../../ReUsables/CustomSelect";
import "../../Pages/Examination.css"
import CreatePeriod from "./CreatePeriod";
import UpdatePeriod from "./UpdatePeriod";

const NewScheduleContainer = (props) => {
  
  return (
    <>
    <div style = {{display: 'flex', gap: "0px",
    width: "100%", justifyContent: "space-between", 
    padding: "0px 40px"
  }}>

    <CreatePeriod/>
    
    <Divider orientation="vertical"
    style={{ backgroundColor: "#DADBE4", opacity: 0.4 }}/>

    <UpdatePeriod/>
    </div>

    </>
  );
};



export default NewScheduleContainer;
