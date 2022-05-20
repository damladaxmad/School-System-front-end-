import React, { useState, useEffect, useMemo, useReducer } from "react";
import { forwardRef,  useImperativeHandle } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider } from "@mui/material";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import CustomSelect from "../../ReUsables/CustomSelect";
import "../../Pages/Examination.css"
import { InputLabel } from "@material-ui/core";

const TheCreatePeriod = React.memo((props) => {
  
    const teachers = useSelector((state) => state.macalin.macalimiin);
    const courses = useSelector((state) => state.maado.maadooyin);
    const [course, setCourse] = useState(courses[0]._id);
    const [teacher, setTeacher] = useState(teachers[0]._id);
    const [startTimer, setStartTimer] = useState("12:00");
    const [endTimer, setEndTimer] = useState("10:21");
  
    const teacherHandler = (e) => {
      setTeacher(e.target.value)
      props.teacher(e.target.value, props.pNumber)
  
    }
  
    const courseHandler = (e) => {
      setCourse(e.target.value) 
      props.course(e.target.value, props.pNumber)
    }
    const startChangeHandler = (e) => {
      setStartTimer(e);
      props.startTimer(e, props.pNumber)
    }
    const endChangeHandler = (e) => {
      setEndTimer(e);
      props.endTimer(e, props.pNumber)
    }
  
    
    useEffect(()=> {
    
    }, [props])
  
    return (
        <div style = {{display: "flex", gap: "10px",
      width: "300px", flexDirection: "column", marginTop: '20px'
     }}>
    
        <div style={{display: "flex", gap: "10px"}}>
          <p style={{margin: "0px", padding: "6px 10px",
        backgroundColor: "white", borderRadius: "8px",
        fontWeight: "700", fontSize: "18px", color: "#F2994A"
        }}> {props.pNumber.substring(1)}</p>
        <TimePicker
            onChange={(e) => startChangeHandler(e)}
            value= {startTimer}
            className="timePicker"
            hourPlaceholder="hh"
            disableClock={true}
            clearIcon={null}
            minutePlaceholder="mm"
            format = "h:mm:a"
          />
           <TimePicker
            onChange={(e) => endChangeHandler(e)}
            value= {endTimer}
            className="timePicker"
            hourPlaceholder="hh"
            disableClock={true}
            clearIcon={null}
            minutePlaceholder="mm"
            format = "h:mm:a"
          />
        </div>
    
        <div style={{marginLeft: "40px", display: "flex", gap: "10px",
                flexDirection: "column"}}>
     <FormControl >
         {/* <InputLabel> Enter Subject
         </InputLabel> */}
        <Select
          style={{  height: "40px", width: "250px",
            color: "black", backgroundColor: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          onChange={(e)=>courseHandler(e)}
            // label="Enter Subject"
        >
          {courses.map((data, index) => (
            <MenuItem value={data._id} key={index}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  
      <FormControl >
        <Select
          style={{  height: "40px", width: "250px",
            color: "black", backgroundColor: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teacher}
          onChange={teacherHandler}
          //   label="Gender"
        >
          {teachers.map((data, index) => (
            <MenuItem value={data._id} key={index}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
          
        </div>
      )
    })

    export default TheCreatePeriod