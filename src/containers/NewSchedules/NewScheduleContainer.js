import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Button } from "@material-ui/core";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import { setNewPeriods } from "../../redux/actions/xisoActions";

const NewScheduleContainer = (props) => {
  const [saved, setSaved] = useState(false);
  const maadooyin = useSelector((state) => state.maado.maadooyin);
  const macalimiin = useSelector((state) => state.macalin.macalimiin);
  const [maado, setMaado] = useState(maadooyin[0]._id);
  const [startTimer, setStartTimer] = useState();
  const [endTimer, setEndTimer] = useState();
  const [macalin, setMacalin] = useState(macalimiin[0]._id);
  const dispatch = useDispatch();

  const [periodOne, setPeriodOne] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 0,
    day: props.day,
    startTime: null,
    endTime: null,
  });
  const [periodTwo, setPeriodTwo] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 1,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodThree, setPeriodThree] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 2,
    day: props.day,
    startTime: null,
    endTime: null,
  });
  
  const [periodFour, setPeriodFour] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 3,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodFive, setPeriodFive] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 4,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodSix, setPeriodSix] = useState({
    course: maado,
    teacher: macalin,
    class: props.fasal,
    period: 5,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  // TIME STATES AND HANDLERS
  const startChangeHandler = (e) => {
    setStartTimer(e);
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, startTime: e });
    }
    if (props.number === 2) {
      setPeriodTwo({ ...periodTwo, startTime: e });
    } if (props.number === 3) {
      setPeriodThree({ ...periodThree, startTime: e });
    } if (props.number === 4) {
      setPeriodFour({ ...periodFour, startTime: e });
    } if (props.number === 5) {
      setPeriodFive({ ...periodFive, startTime: e });
    } if (props.number === 6) {
      setPeriodSix({ ...periodSix, startTime: e });
    }


  };

  const endChangeHandler = (e) => {
    setEndTimer(e);
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, endTime: e });
    }
    if (props.number === 2) {
      setPeriodTwo({ ...periodTwo, endTime: e });
    } if (props.number === 3) {
      setPeriodThree({ ...periodThree, endTime: e });
    } if (props.number === 4) {
      setPeriodFour({ ...periodFour, endTime: e });
    } if (props.number === 5) {
      setPeriodFive({ ...periodFive, endTime: e });
    } if (props.number === 6) {
      setPeriodSix({ ...periodSix, endTime: e });
    }
  };

  // TEACHERS AND COURSES STATES AND HANDLERS

  const maadoHandler = (e) => {
    setMaado(e.target.value);
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, course: e.target.value });
    }
    if (props.number === 2) {
      setPeriodTwo({ ...periodTwo, course: e.target.value });
    } if (props.number === 3) {
      setPeriodThree({ ...periodThree, course: e.target.value });
    } if (props.number === 4) {
      setPeriodFour({ ...periodFour, course: e.target.value });
    } if (props.number === 5) {
      setPeriodFive({ ...periodFive, course: e.target.value });
    } if (props.number === 6) {
      setPeriodSix({ ...periodSix, course: e.target.value });
    }
  };

  const macalinHandler = (e) => {
    setMacalin(e.target.value);
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, teacher: e.target.value });
    }
    if (props.number === 2) {
      setPeriodTwo({ ...periodTwo, teacher: e.target.value });
    } if (props.number === 3) {
      setPeriodThree({ ...periodThree, teacher: e.target.value });
    } if (props.number === 4) {
      setPeriodFour({ ...periodFour, teacher: e.target.value });
    } if (props.number === 5) {
      setPeriodFive({ ...periodFive, teacher: e.target.value });
    } if (props.number === 6) {
      setPeriodSix({ ...periodSix, teacher: e.target.value });
    }
  };

  useEffect(() => {
    setPeriodOne({ ...periodOne, day: props.day, class: props.fasal });
    setPeriodTwo({ ...periodTwo, day: props.day, class: props.fasal });
    setPeriodThree({ ...periodThree, day: props.day, class: props.fasal });
    setPeriodFour({ ...periodFour, day: props.day, class: props.fasal });
    setPeriodFive({ ...periodFive, day: props.day, class: props.fasal });
    setPeriodSix({ ...periodSix, day: props.day, class: props.fasal });
  }, [props.day, props.fasal]);

  const postNewPeriod = (period) => {
    axios.post(`/api/v1/periods`, period).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  

  const saveFunction = (period) => {
      if (
        (period.startTime,
        period.endTime == null)
      ) {
        alert("Please fill in all the data");
        return;
      }
      dispatch(setNewPeriods(periodOne));
      postNewPeriod(period);
      setSaved(true);  
  }

  const saveHandler = () => {
    if (props.number == 1) {
     saveFunction(periodOne)
    } else if (props.number == 2) {
      saveFunction(periodTwo)
    }  else if (props.number == 3) {
      saveFunction(periodThree)
    }  else if (props.number == 4) {
      saveFunction(periodFour)
    }  else if (props.number == 5) {
      saveFunction(periodFive)
    }  else if (props.number == 6) {
      saveFunction(periodSix)
    }
  };

  return (
    <div
      style={{
        backgroundColor:  "#F0F2FA",
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
        // pointerEvents: props.active == props.number ? null : "none",
      }}
    >
      <div style={{ display: "flex" }}>
        <p
          style={{
            margin: "0px",
            padding: "0px",
            backgroundColor: "#2F49D1",
            color: "white",
            width: "35px",
            height: "35px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bolder",
            marginRight: saved ? "180px" : "188px",
          }}
        >
          {" "}
          {props.number}
        </p>
        <Button
          variant="contained"
          style={{
            backgroundColor: saved ? "green" : "#2F49D1",
            color: "white",
          }}
          onClick={saveHandler}
        >
          {" "}
          {saved ? "saved" : "save"}
        </Button>
      </div>
      <TimePicker
        onChange={(e) => startChangeHandler(e)}
        value={startTimer}
        className="timePicker"
        hourPlaceholder="hh"
        disableClock={true}
        clearIcon={null}
        minutePlaceholder="mm"
      />
      <TimePicker
        onChange={(e) => endChangeHandler(e)}
        value={endTimer}
        className="timePicker"
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        clearIcon={null}
        disableClock={true}
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
            <MenuItem value={maado._id} key={maado._id}>
              {maado.name}
            </MenuItem>
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
            <MenuItem value={macalin._id} key={macalin._ids}>
              {macalin.name}
            </MenuItem>
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
