import React from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ScheduleContainer from "../containers/SchedulesContainers/ScheduleContainer";

const Schedules = () => {
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
