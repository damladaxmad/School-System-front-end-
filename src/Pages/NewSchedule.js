import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { FaSave } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import NewScheduleContainer from "../containers/NewSchedules/NewScheduleContainer";
import { forwardRef, useRef, useImperativeHandle } from "react"

const NewSchedule = (props) => {
  const childCompRef = useRef()

  let numbers = [1, 2, 3, 4, 5, 6];
  let days = [
    { name: "saturday" },
    { name: "sunday" },
    { name: "monday" },
    { name: "tuesday" },
    { name: "wednesday" },
    { name: "thursday" },
    { name: "friday" },
  ];
  const fasalo = useSelector((state) => state.allFasalo.fasalo);

  const [fasal, setFasal] = useState(typeof props.value === 'string' ? props.value : fasalo[0]._id);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
    // dispatch(setActiveClass(e.target.value));
  };

  const [day, setDay] = useState(days[0].name);
  const dayHandler = (e) => {
    setDay(e.target.value);
  };


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
        flexDirection: "column",
      }}
    >
     
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <FormControl fullWidth>
          {/* <InputLabel>Gender</InputLabel> */}

          <Select
            style={{ margin: "20px", height: "40px", color: "#B9B9B9" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fasal}
            onChange={fasalHandler}
            //   label="Gender"
          >
            {fasalo.map((fasal, index) => (
              <MenuItem value={fasal._id} key={index}>
                {fasal.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider style={{ backgroundColor: "#DADBE4", opacity: 0.4 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "25px",
            gap: "20px",
          }}
        >
          <FormControl>

            <Select
              style={{
                margin: "0px",
                height: "40px",
                width: "300px",
                color: "black",
                backgroundColor: "white",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              onChange={dayHandler}
              //   label="Gender"
            >
              {days.map((day, index) => (
                <MenuItem value={day.name} key={index}>
                  {day.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2F49D1",
              color: "white",
            }}
            startIcon={
              <FaSave
                style={{
                  color: "white",
                }}
              />
            }
            onClick={() => childCompRef.current.saveHandler()}
          >
            Save Schedule
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {numbers.map((number, index) => (
            <NewScheduleContainer
              number={number}
              fasal={fasal}
              key={index}
              day={day}
              ref={childCompRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSchedule;
