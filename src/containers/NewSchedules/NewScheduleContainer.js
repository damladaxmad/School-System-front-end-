import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Button } from "@material-ui/core";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import { setNewPeriods } from "../../redux/actions/xisoActions";

const NewScheduleContainer = (props) => {
    const dispatch = useDispatch()
    const newPeriod = useSelector((state) => state.xiso.newPeriods);

    const [periodOne, setPeriodOne] = useState(
      {course: null, teacher: null, class: props.fasal,
      period: 0, day: props.day,
    startTime: null, endTime: null}) 
    const [periodTwo, setPeriodTwo] = useState({course: null, teacher: null}) 

    
console.log(props.day)
  const maadooyin = useSelector((state) => state.maado.maadooyin);
  const macalimiin = useSelector((state) => state.macalin.macalimiin);

  // TIME STATES AND HANDLERS
  const [startTimer, setStartTimer] = useState();
  const startChangeHandler = (e) => {
    setStartTimer(e);
    if (props.number === 1){
      setPeriodOne({...periodOne,  startTime: e})
      }
  };

  const [endTimer, setEndTimer] = useState();
  const endChangeHandler = (e) => {
    setEndTimer(e);
    if (props.number === 1){
      setPeriodOne({...periodOne, endTime: e})
      }
  };

  // TEACHERS AND COURSES STATES AND HANDLERS
  const [maado, setMaado] = useState(maadooyin[0]._id);
  const maadoHandler = (e) => {
    setMaado(e.target.value);
    if (props.number === 1){
    setPeriodOne({...periodOne, course: e.target.value})
    }
    // setData({...data, course: e.target.value})
  };

  const [macalin, setMacalin] = useState(macalimiin[0]._id);
  const macalinHandler = (e) => {
    setMacalin(e.target.value);
    if (props.number === 1){
      setPeriodOne({...periodOne, teacher: e.target.value})
      
    } if (props.number === 2){
      setPeriodTwo({...periodTwo, teacher: e.target.value})
    }

  };

  useEffect(()=>{
    setPeriodOne({...periodOne,  day: props.day, fasal: props.fasal})
    
  }, [props.day, props.fasal])
  
  const postNewPeriod = () => {
    // if (newPeriod == null) return 
    console.log("in the post")
    console.log(newPeriod)
      axios.post(`/api/v1/periods`,  periodOne )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const saveHandler = () =>  {
    if(periodOne.startTime == null){
      alert("Please fill in all the data")
      return
    }
    dispatch(setNewPeriods(periodOne));
    postNewPeriod()
    
  }

 
      

  return (
    <div
      style={{
        backgroundColor: props.active == props.number ? "#B9B9B9" : "#F0F2FA",
        width: "29%",
        borderRadius: "10px",
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        paddingBottom: "14px",
        gap: "10px",
        marginBottom: "0px",
        pointerEvents: props.active == props.number ? null : "none"
      }}
    >
      <div style={{display: "flex", }}>
      <p style = {{margin: "0px", padding: "0px",
    backgroundColor: "#2F49D1", color: "white", width: "35px",
    height: "35px", borderRadius: "100%", display: "flex",
    justifyContent: "center", alignItems: "center",
    fontWeight: "bolder", marginRight: "188px"}}> {props.number}</p>
    <Button variant = "contained" color = "primary"
    onClick={saveHandler}> Save</Button>
    </div>
      <TimePicker
        onChange={(e) => startChangeHandler(e)}
        value={startTimer}
        className="timePicker"
        hourPlaceholder = "hh"
        disableClock = {true}
        clearIcon={null}
        minutePlaceholder="mm"
      />
      <TimePicker
        onChange={(e) => endChangeHandler(e)}
        value={endTimer}
        className="timePicker"
        hourPlaceholder = "hh"
        minutePlaceholder="mm"
        clearIcon={null}
        disableClock = {true}
      />
      {/* </div> */}
      <FormControl>

        <Select
          style={{
            margin: "0px",
            height: "40px",
            width: "260px",
            color: "black",
            backgroundColor: "white",
          }}

          value={maado}
          onChange={maadoHandler}
        >
          {maadooyin.map((maado) => (
            <MenuItem value={maado._id} key = {maado._id}>{maado.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>

        <Select
          style={{
            margin: "0px",
            height: "40px",
            width: "260px",
            color: "black",
            backgroundColor: "white",
          }}
          value={macalin}
          onChange={macalinHandler}
            label="Gender"
        >
          {macalimiin.map((macalin) => (
            <MenuItem value={macalin._id} key = {macalin._ids}>{macalin.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <p style={{margin: "0px", fontSize: '16px',
    fontWeight: "bold", marginLeft: "245px",
    padding: "5px 15px", backgroundColor: "#2F49D1",
    borderRadius: "5px", color: "white"}}> {props.number}</p> */}
    </div>
  );
};

export default NewScheduleContainer;
