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

  const xisooyin = useSelector((state) => state.xiso.xisooyin);

  let allPeriods = [0, 1, 2, 3, 4, 5]
  let creatablePeriods = []
  let updatablePeriods = []

  const currentClassPeriods = xisooyin.filter((p)=> {
    return props.fasal == p.id 
  })
  const currentPeriods = currentClassPeriods[0].periods.filter((p)=> {
    return props.day == p.day
  })  
  currentPeriods.map((p) => {
    updatablePeriods.push(p.period)
  })
  creatablePeriods = allPeriods.filter(item => 
    !updatablePeriods.includes(item));

  
    useEffect(()=>{

    }, [props.day, props.fasal])


  
  return (
    <>
    <div style = {{display: 'flex', gap: "0px",
    width: "100%", justifyContent: "space-between", 
    padding: "0px 40px"
  }}>

    <CreatePeriod creatablePeriods = {creatablePeriods}
    day = {props.day} fasal = {props.fasal}/>
    
    <Divider orientation="vertical"
    style={{ backgroundColor: "#DADBE4", opacity: 0.4 }}/>

    <UpdatePeriod updatablePeriods = {updatablePeriods}
    day = {props.day} fasal = {props.fasal}/>
    </div>

    </>
  );
};



export default NewScheduleContainer;
