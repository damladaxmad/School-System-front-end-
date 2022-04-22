import React, {useEffect, useState} from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ScheduleContainer from "../containers/SchedulesContainers/ScheduleContainer";
import axios from "axios";
import { setXisooyin } from "../redux/actions/xisoActions";
import { useDispatch, useSelector } from "react-redux";

const Schedules = () => {

  const newPeriod = useSelector((state) => state.xiso.newPeriods);
  const dispatch = useDispatch();

      const fetchXisooyin = async () => {
        const response = await axios
          .get("/api/v1/periods")
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setXisooyin(response.data.data.classes));
      };
      
     
     console.log(newPeriod)

  useEffect(() => {
    fetchXisooyin();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2> Schedules</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <MdAdd
              style={{
                color: "white",
              }}
            />
          }
        >
          Add Schedules
        </Button>
      </div>

      <ScheduleContainer />
      
    </div>
  );
};

export default Schedules;
