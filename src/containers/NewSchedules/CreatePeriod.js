import React, { useState, useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";
import TheCreatePeriod from "./TheCreatePeriod";

const CreatePeriod = (props) => {
  const [p, setP] = useState({})


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

  const complete = isPeriodComplete(p.p3)
  const engaged = isPeriodEngaged(p.p3)
  console.log(complete)
  console.log(engaged)
  
  const postNewPeriods = (periods) => {
    axios.post(`/api/v1/periods`, periods).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const saveHandler = () => {

    let creatablePeriods = []
    let unFinishedPeriods = ''

    // loop through the period to set creatable periods, etc.
    for (let i = 1; i<=6; i++){
      // Check if there are unfinished periods
    if (!isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])){
      unFinishedPeriods += `period ${i}, `
    } 
      // Check if there are creatable periods
    if (isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])){
      creatablePeriods.push(p[`p${i}`])
    }
  } 

  // Create periods if they are complete and no unfinished ones
  if (creatablePeriods.length > 0 && unFinishedPeriods == '') {
    postNewPeriods(creatablePeriods)
    alert("Succesfully Saved")
  } 

  // Report if there are unfinished periods
  if (unFinishedPeriods !== ''){
    alert(`please finsih ${unFinishedPeriods
      .substring(0, unFinishedPeriods.length - 2)}`)
  }
  
  // Report if there are no periods to save
  if (unFinishedPeriods == '' && creatablePeriods.length < 1) {
    alert("nothing to save")
  }

  }
 

  useEffect(()=>{
    setP({})
  },[props.day, props.fasal])

    return (
    <div style = {{display: "flex", flexDirection: "column",
    alignItems: "center", gap: "20px",
    width: "34%"}}>
      <h2> Create New Periods</h2>
      {props.creatablePeriods.map(p=> 
      <TheCreatePeriod pNumber = {`p${p+1}`}
      teacher = {teacherFun} course = {courseFun}
      startTimer ={startTimerFun} endTimer = {endTimerFun}/>
      )}
      { props.creatablePeriods.length > 0 ? null :
      <p> No periods to create</p>}
      <Button variant="contained" style = {{
        marginTop: "30px",
        marginLeft: "20px",
        backgroundColor: "#2F49D1",
      }}
      onClick = {saveHandler}>
        Save Period
      </Button>
    </div>
    )
  }


  export default CreatePeriod