import React, { useState, useEffect, useMemo } from "react";
import { forwardRef,  useImperativeHandle } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem } from "@mui/material";
import TimePicker from "react-time-picker";
import "../../Pages/Examination.css";
import axios from "axios";
import { emptyUpdatedPeriods, setNewPeriods, setUpdatedPeriods } from "../../redux/actions/xisoActions";

const NewScheduleContainer = forwardRef((props, ref) => {
  const [saved, setSaved] = useState(false)
  const xisooyin = useSelector((state) => state.xiso.xisooyin);
  const maadooyin = useSelector((state) => state.maado.maadooyin);
  const macalimiin = useSelector((state) => state.macalin.macalimiin);
  const newPeriods = useSelector((state)=> state.xiso.newPeriods)
  const updatedPeriods = useSelector((state)=> state.xiso.updatedPeriods)
  const [engaged, setEngaged] = useState(false)

  const dispatch = useDispatch();

  const [periodOne, setPeriodOne] = useState({
    course: null,
    teacher: null,
    class: props.fasal,
    period: 0,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodTwo, setPeriodTwo] = useState({
    course: null,
    teacher: null,
    class: props.fasal,
    period: 1,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodThree, setPeriodThree] = useState({
    course: null,
    course: null,
    teacher: null,
    class: props.fasal,
    period: 2,
    day: props.day,
    startTime: null,
    endTime: null,
  });
  
  const [periodFour, setPeriodFour] = useState({
    course: null,
    teacher: null,
    class: props.fasal,
    period: 3,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodFive, setPeriodFive] = useState({
    course: null,
    teacher: null,
    class: props.fasal,
    period: 4,
    day: props.day,
    startTime: null,
    endTime: null,
  });

  const [periodSix, setPeriodSix] = useState({
     course: null,
    teacher: null,
    class: props.fasal,
    period: 5,
    day: props.day,
    startTime: null,
    endTime: null,
  });
  
  let population = 0
  let currentPeriods = []
  xisooyin.map((x)=> {
    if (x.id == props.fasal){
      population = x.periods
      return
    }
  })
  population.map((p)=> {
    if (p.day == props.day){
      currentPeriods.push(p)
      return
    }
  })

  useEffect(()=>{

    currentPeriods.map((p)=>{
      if (p.period === 0){
          if (periodOne.course === null){
          setPeriodOne(p);
        }
      } if (p.period === 1){
          if (periodTwo.course === null){
          setPeriodTwo(p);
        }
      } if (p.period === 2){
        if (periodThree.course === null){
        setPeriodThree(p);
      } if (p.period === 3){
        if (periodFour.course === null){
        setPeriodFour(p);
      } if (p.period === 4){
        if (periodFive.course === null){
        setPeriodFive(p);
      } if (p.period === 5){
        if (periodSix.course === null){
        setPeriodSix(p);
      }
    }
    }
    }
    }
    })
  
  }, [currentPeriods])
console.log(periodOne)
  
  const stateReducer = (period, type) => {
      let course = 0
      let teacher = 0
      let startTimer = 0
      let endTimer = 0
      if (type == "course"){
        currentPeriods.map((p)=> {
          if (p.period == period){
            course = p.course._id
          }
        })
        return course
      }  if (type == "teacher"){
        currentPeriods.map((p)=> {
          if (p.period == period){
            teacher = p.teacher._id
          }
        })
        return teacher
      }  if (type == "startTimer"){
        currentPeriods.map((p)=> {
          if (p.period == period){
            startTimer = p.startTime
          }
        })
        return startTimer
      }  if (type == "endTimer"){
        currentPeriods.map((p)=> {
          if (p.period == period){
            endTimer = p.endTime
          }
        })
        return endTimer
      }   
  }

  const courseFunction = () => {
    if (props.number == 1){
      return stateReducer(0, "course")
    } if (props.number == 2){
      return stateReducer(1, "course")
    } if (props.number == 3){
      return stateReducer(2, "course")
    }  if (props.number == 4){
      return stateReducer(3, "course")
    }  if (props.number == 5){
      return stateReducer(4, "course")
    }  if (props.number == 6){
      return stateReducer(5, "course")
    }
  }

  const teacherFunction = () => {
    if (props.number == 1){
      return stateReducer(0, "teacher")
    } if (props.number == 2){
      return stateReducer(1, "teacher")
    } if (props.number == 3){
      return stateReducer(2, "teacher")
    }  if (props.number == 4){
      return stateReducer(3, "teacher")
    }  if (props.number == 5){
      return stateReducer(4, "teacher")
    }  if (props.number == 6){
      return stateReducer(5, "teacher")
    }
  }

  const startTimerFunction = () => {
    if (props.number == 1){
      return stateReducer(0, "startTimer")
    } if (props.number == 2){
      return stateReducer(1, "startTimer")
    } if (props.number == 3){
      return stateReducer(2, "startTimer")
    }  if (props.number == 4){
      return stateReducer(3, "startTimer")
    }  if (props.number == 5){
      return stateReducer(4, "startTimer")
    }  if (props.number == 6){
      return stateReducer(5, "startTimer")
    }
  }

  const endTimerFunction = () => {
    if (props.number == 1){
      return stateReducer(0, "endTimer")
    } if (props.number == 2){
      return stateReducer(1, "endTimer")
    } if (props.number == 3){
      return stateReducer(2, "endTimer")
    }  if (props.number == 4){
      return stateReducer(3, "endTimer")
    }  if (props.number == 5){
      return stateReducer(4, "endTimer")
    }  if (props.number == 6){
      return stateReducer(5, "endTimer")
    }
  }

  const [maado, setMaado] = useState(() => courseFunction());
  const [macalin, setMacalin] = useState(() => teacherFunction());
  const [startTimer, setStartTimer] = useState(() => startTimerFunction());
  const [endTimer, setEndTimer] = useState(() => endTimerFunction());


  

  // TIME HANDLERS
  const startChangeHandler = (e) => {
    setStartTimer(e);
    setEngaged(true)
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
    setEngaged(true)
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

  // TEACHERS AND COURSES HANDLERS

  const maadoHandler = (e) => {
    setMaado(e.target.value);
    setEngaged(true)
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, course: e.target.value });
    } if (props.number === 2) {
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
    setEngaged(true)
    if (props.number === 1) {
      setPeriodOne({ ...periodOne, teacher: e.target.value });
    } if (props.number === 2) {
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

  useEffect(()=>{
    setMaado(() => courseFunction())
    setMacalin(() => teacherFunction())
    setStartTimer(() => startTimerFunction())
    setEndTimer(() => endTimerFunction());
  }, [props.day, props.fasal])

  const postNewPeriod = (period) => {
    axios.post(`/api/v1/periods`, period).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    dispatch(emptyUpdatedPeriods())
  };

  console.log(periodOne)

  const newPeriodChecker = (newPeriod) => {
    
    if (
      (newPeriod.startTime !== null &&
        newPeriod.endTime !== null && newPeriod.course !== null && 
        newPeriod.teacher !== null && !newPeriods.includes(newPeriod))
    ) {
      
      if ( newPeriod.hasOwnProperty('_id')){
        if (!updatedPeriods.includes(newPeriod)){
          dispatch(setUpdatedPeriods(newPeriod))
        }
      } else {
        dispatch(setNewPeriods(newPeriod))
      }
      
    }
  }
  
  // 1 
  newPeriodChecker(periodOne)
  newPeriodChecker(periodTwo)
  newPeriodChecker(periodThree)
  newPeriodChecker(periodFour)
  newPeriodChecker(periodFive)
  newPeriodChecker(periodSix)
  
  
 
  console.log(periodOne)

  const saveFunction = () => {
    if (newPeriods.length > 0){
      postNewPeriod(newPeriods);
      setSaved(true);
      alert("succesfully saved")      
    } else if (newPeriods.length < 1 && !engaged){
      alert("Nothing to save")
    } else if (newPeriods.length < 1 && engaged){
      alert("Fill in the blanks")
    }   
}

  useImperativeHandle(ref, () => ({saveHandler () {
   saveFunction()

  },
}))

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
            marginRight: "248px",
          }}
        >
          {" "}
          {props.number}
        </p>
  
      </div>
      <TimePicker
        onChange={(e) => startChangeHandler(e)}
        value={startTimer}
        className="timePicker"
        hourPlaceholder="hh"
        disableClock={true}
        clearIcon={null}
        minutePlaceholder="mm"
        format = "h:mm:a"
      />
      <TimePicker
        onChange={(e) => endChangeHandler(e)}
        value={endTimer}
        className="timePicker"
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        clearIcon={null}
        disableClock={true}
        format = "h:mm:a"
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

    </div>
  );
});

export default NewScheduleContainer;
