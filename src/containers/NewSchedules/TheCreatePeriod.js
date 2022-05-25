import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider, InputLabel, TextField } from "@mui/material";
import TimePicker from "react-time-picker";
import "./TimePicker.css";

const TheCreatePeriod = React.memo((props) => {
    
    const teachers = useSelector((state) => state.macalin.macalimiin);
    const courses = useSelector((state) => state.maado.maadooyin);    
    const [course, setCourse] = useState();
    const [teacher, setTeacher] = useState();
    const [startTimer, setStartTimer] = useState("0:00");
    const [endTimer, setEndTimer] = useState("0:00");
  
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
        
        <TextField
          select
          size="small"
          style={{ height: "36px", width: "250px",
            color: "black", backgroundColor: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label = {!course && "Select Course"}
          InputLabelProps={{style : {color : 'black'} }}
          onChange={(e)=>courseHandler(e)}
            // label="Enter Subject"
        >
          {courses.map((data, index) => (
            <MenuItem value={data._id} key={index}>
              {data.name}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
  
      <FormControl >
        <TextField
           select
           size="small"
           style={{ height: "36px", width: "250px",
             color: "black", backgroundColor: "white" }}
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={teacher}
           label = {!teacher && "Select Teacher"}
           InputLabelProps={{style : {color : 'black'} }}
           onChange={teacherHandler}
          //   label="Gender"
        >
          {teachers.map((data, index) => (
            <MenuItem value={data._id} key={index}>
              {data.name}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
        </div>
          
        </div>
      )
    })

    export default TheCreatePeriod