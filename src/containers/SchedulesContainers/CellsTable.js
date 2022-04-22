import React from "react";
import Grid from "@mui/material/Grid";

const CellsTable = (props) => {
  return (
    <>
      <Grid
        
        item
        xs={1.71}
        style={{
          padding: "30px",
          backgroundColor: "white",
          borderRight: "2px solid #F5EFFF",
          borderBottom: "2px solid #F5EFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "20px",
            color: "#0061F7",
            fontWeight: "800",
          }}
        >
          {" "}
          {props.value}
        </p>
      </Grid>
      {props.periods.map((period) => (
        <Grid
          key={period._id}
          item
          xs={1.71}
          style={{
            padding: "0px",
            backgroundColor: "white",
            borderRight: "2px solid #F5EFFF",
            borderBottom: "2px solid #F5EFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "12px",
              fontWeight: "400",
              color: "#B9B9B9",
            }}
          >
            {" "}
            {period.startTime}  :  {period.endTime}
          </p>
          <p
            style={{
              margin: "0px",
              fontSize: "18px",
              fontWeight: "600",
              color: period.course.name == "Empty" ? "lightGrey" : "#676767",
            }}
          >
            {" "}
            {period.course.name}
          </p>
          <p
            style={{
              margin: "0px",
              fontSize: "12px",
              fontWeight: "400",
              color: "#B9B9B9",
            }}
          >
            {period.teacher ? period.teacher.name : "______________"}
          </p>
        </Grid>
      ))}
    </>
  );
};

export default CellsTable;
