import React, { useState, useEffect, useMemo, useReducer } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Button, Divider } from "@mui/material";
import TimePicker from "react-time-picker";
import axios from "axios";
import CustomSelect from "../../ReUsables/CustomSelect";
import TheUpdatePeriod from "./TheUpdatePeriod";

const UpdatePeriod = (props) => {
  const xisooyin = useSelector((state) => state.xiso.xisooyin);

  let currentPeriods = [];
  let population = 0;
  xisooyin.map((x) => {
    if (x.id == props.fasal) {
      population = x.periods;
    }
  });
  population.map((p) => {
    if (p.day == props.day) {
      currentPeriods.push(p);
    }
  });

  const [p, setP] = useState({});

  const allFun = (propery, value, period) => {
    let updatedPeriod;
    for (let i = 0; i <= 5; i++) {
      if (period == i) {
        currentPeriods.map((per) => {
          if (per.period == period) {
            updatedPeriod = per;
            updatedPeriod[propery] = value;
            setP({ ...p, [`p${period + 1}`]: { ...p[period], updatedPeriod } });
          }
        });
      }
    }
  };

  const teacherFun = (teacher, period) => {
    allFun("teacher", teacher, period);
  };

  const courseFun = (course, period) => {
    allFun("course", course, period);
  };

  const startTimerFun = (startTimer, period) => {
    allFun("startTime", startTimer, period);
  };

  const endTimerFun = (endTimer, period) => {
    allFun("endTime", endTimer, period);
  };

  const isPeriodComplete = (period) => {
    if (typeof period != "undefined") {
      if (
        period.updatedPeriod.teacher ||
        period.updatedPeriod.course ||
        period.updatedPeriod.startTime ||
        period.updatedPeriod.endTime
      ) {
        return true;
      } else return false;
    } else return false;
  };

  const isPeriodEngaged = (period) => {
    if (typeof period != "undefined") return true;
    else return false;
  };

  const postNewPeriods = (periods) => {
    periods.map((period) => {
      axios
        .patch(
          `/api/v1/periods/${period.updatedPeriod._id}`,
          period.updatedPeriod
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    });
  };

  const saveHandler = () => {
    let updatablePeriods = [];
    let unFinishedPeriods = "";

    // loop through the period to set updatable periods, etc.
    for (let i = 1; i <= 6; i++) {
      // Check if there are unfinished periods
      if (!isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])) {
        unFinishedPeriods += `period ${i}, `;
      }
      // Check if there are updatable periods
      if (isPeriodComplete(p[`p${i}`]) && isPeriodEngaged(p[`p${i}`])) {
        updatablePeriods.push(p[`p${i}`]);
      }
    }

    // Create periods if they are complete and no unfinished ones
    if (updatablePeriods.length > 0 && unFinishedPeriods == "") {
      postNewPeriods(updatablePeriods);
      alert("Succesfully Updated");
    }

    // Report if there are unfinished periods
    if (unFinishedPeriods !== "") {
      alert(
        `please finsih ${unFinishedPeriods.substring(
          0,
          unFinishedPeriods.length - 2
        )}`
      );
    }

    // Report if there are no periods to save
    if (unFinishedPeriods == "" && updatablePeriods.length < 1) {
      alert("nothing to save");
    }
  };

  useEffect(() => {
    setP({});
  }, [props.day, props.fasal]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginRight: "50px",
        width: "35%",
      }}
    >
      <h2> Update Old Periods</h2>
      {props.updatablePeriods.map((p) => (
        <TheUpdatePeriod
          pNumber={`p${p + 1}`}
          teacher={teacherFun}
          course={courseFun}
          startTimer={startTimerFun}
          endTimer={endTimerFun}
          day={props.day}
          fasal={props.fasal}
          key={p}
          number={p}
        />
      ))}
      {props.updatablePeriods.length > 0 ? null : <p> No periods to update</p>}
      {props.updatablePeriods.length > 0 && <Button
        variant="contained"
        style={{
          marginTop: "30px",
          marginLeft: "40px",
          backgroundColor: "#2F49D1",
        }}
        onClick={saveHandler}
      >
        Update Period
      </Button> }
    </div>
  );
};

export default UpdatePeriod;
