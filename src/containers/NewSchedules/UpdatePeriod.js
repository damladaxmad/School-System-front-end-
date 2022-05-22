import React, { useState, useEffect, useMemo, useReducer } from "react";
import { forwardRef,  useImperativeHandle } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider } from "@mui/material";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import CustomSelect from "../../ReUsables/CustomSelect";
import "../../Pages/Examination.css"
import TheUpdatePeriod from "./TheUpdatePeriod";

const UpdatePeriod = (props) => {

  
  const xisooyin = useSelector((state) => state.xiso.xisooyin);
  
  const [toBeUpdatedPeriods, setToBeUpdatedPeriods] = useState([])
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
   
  const forceUpdateHandler = () => {
    forceUpdate()
    alert("force updated")
  }
  const [p, setP] = useState({})

  const fetchToBeUpdatedPeriods = () => {
    if (toBeUpdatedPeriods.length < 1) {
      let currentPeriods = []
    let population = 0
    xisooyin.map((x)=> {
      if (x.id == props.fasal){
        population = x.periods
      }
    })
    population.map((p)=> {
      if (p.day == props.day){
        currentPeriods.push(p)
      }
    })
    setToBeUpdatedPeriods(currentPeriods)
    }
  }
 
  useEffect(()=>{
    fetchToBeUpdatedPeriods()
},[props.day, props.fasal])

console.log(toBeUpdatedPeriods)

  

  const teacherFun = (teacher, period) => {
   for (let i = 1; i<=6; i++){
     if(period == `p${i}`){
       setP({...p, [period]: { ...p[period], teacher: teacher,
      day: props.day, class: props.fasal, period: i-1}})
     }
   }
  }

  const courseFun = (course, period) => {
    for (let i = 1; i<=6; i++){
      if(period == `p${i}`){
        setP({...p, [period]: {...p[period], course: course,
          day: props.day, class: props.fasal, period: i-1
        }})
      }
    }
   }
   
   const startTimerFun = (startTimer, period) => {
    for (let i = 1; i<=6; i++){
      if(period == `p${i}`){
        setP({...p, [period]: {...p[period], startTime: startTimer,
          day: props.day, class: props.fasal, period: i-1
        }})
      }
    }
   }

   const endTimerFun = (endTimer, period) => {
    for (let i = 1; i<=6; i++){
      if(period == `p${i}`){
        setP({...p, [period]: {...p[period], endTime: endTimer,
          day: props.day, class: props.fasal, period: i-1
        }})
      }
    }
   }

   const isPeriodComplete = (period) => {
    if (typeof period != "undefined"){
    if (period.teacher && period.course && 
      period.startTime && period.endTime){
      return true
    } else return false
  } else return false
  }

  const isPeriodEngaged = (period) => {
    if (typeof period != "undefined") return true
     else return false
  }
  
  const postNewPeriods = (periods) => {
    axios.post(`/api/v1/periods`, periods).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const saveHandler = () => {
    alert("in the update")

  //   let updatablePeriods = []
  //   let unFinishedPeriods = ''

  //   // loop through the period to set creatable periods, etc.
  //   for (let i = 1; i<=6; i++){
  //     // Check if there are unfinished periods
  //   if (!isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])){
  //     unFinishedPeriods += `period ${i}, `
  //   } 
  //     // Check if there are creatable periods
  //   if (isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])){
  //     updatablePeriods.push(p[`p${i}`])
  //   }
  // } 

  // // Create periods if they are complete and no unfinished ones
  // if (updatablePeriods.length > 0 && unFinishedPeriods == '') {
  //   postNewPeriods(updatablePeriods)
  //   alert("Succesfully Saved")
  // } 

  // // Report if there are unfinished periods
  // if (unFinishedPeriods !== ''){
  //   alert(`please finsih ${unFinishedPeriods
  //     .substring(0, unFinishedPeriods.length - 2)}`)
  // }
  
  // // Report if there are no periods to save
  // if (unFinishedPeriods == '' && updatablePeriods.length < 1) {
  //   alert("nothing to save")
  // }

  }
 
  console.log(props.day)
  
  useEffect(()=>{
    // setP({})
  },[props.day, props.fasal, ignored])

    return (
    <div style = {{display: "flex", flexDirection: "column",
    alignItems: "center", gap: "20px",
    width: "35%"}}>
      <h2> Update Old Periods</h2>
      {props.updatablePeriods.map(p=> 
      <TheUpdatePeriod pNumber = {`p${p+1}`}
      teacher = {teacherFun} course = {courseFun}
      startTimer ={startTimerFun} endTimer = {endTimerFun}
      day = {props.day} fasal = {props.fasal}
      periods = {toBeUpdatedPeriods} key = {p} number = {p}
      forceUpdate = {forceUpdateHandler}/>
      )}
      { props.updatablePeriods.length > 0 ? null :
      <p> No periods to create</p>}
      <Button variant="contained" style = {{
        marginTop: "30px",
        marginLeft: "20px",
        backgroundColor: "#2F49D1",
      }}
      onClick = {saveHandler}>
        Update Period
      </Button>
    </div>
    )
  }



  export default UpdatePeriod