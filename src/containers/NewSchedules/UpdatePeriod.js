import React, { useState, useEffect, useMemo } from "react";
import { forwardRef,  useImperativeHandle } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider } from "@mui/material";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import CustomSelect from "../../ReUsables/CustomSelect";
import "../../Pages/Examination.css"

const UpdatePeriod = (props) => {
   
    return (
    <div style = {{display: "flex", flexDirection: "column",
    alignItems: "center", gap: "20px"}}>
      <h2> Update Old Periods</h2>
      {props.updatablePeriods.map(p=> 
      <ThePeriod pNumber = {p+1}/>
      )}
      { props.updatablePeriods.length > 0 ? null :
      <p> No periods to update</p>}
      
      <Button variant="contained" style = {{
        marginTop: "30px",
        marginLeft: "20px",
        backgroundColor: "#2F49D1",
      }}>
        Update Period
      </Button>
    </div>
    )
  }

  const ThePeriod = (props) => {

    const teachers = useSelector((state) => state.macalin.macalimiin);
    const courses = useSelector((state) => state.maado.maadooyin);

    return (
      <div style = {{display: "flex", gap: "10px",
    width: "300px", flexDirection: "column", marginTop: '20px'
   }}>
  
      <div style={{display: "flex", gap: "10px"}}>
        <p style={{margin: "0px", padding: "6px 10px",
      backgroundColor: "white", borderRadius: "8px",
      fontWeight: "700", fontSize: "18px", color: "#F2994A"
      }}> {props.pNumber}</p>
      <TimePicker
          // onChange={(e) => startChangeHandler(e)}
          value= "12:00"
          className="timePicker"
          hourPlaceholder="hh"
          disableClock={true}
          clearIcon={null}
          minutePlaceholder="mm"
          format = "h:mm:a"
        />
         <TimePicker
          // onChange={(e) => startChangeHandler(e)}
          value= "12:00"
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
      <CustomSelect width = "250px" height = "40px"
        isLabel = {false} data = {teachers} />
           <CustomSelect width = "250px" height = "40px"
        isLabel = {false} data = {courses}/>
      </div>
        
      </div>
    )
  }

  export default UpdatePeriod