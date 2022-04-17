import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {useSelector, useDispatch } from "react-redux";
import axios from "axios";

const CellsTable = (props) => {

  // const xi = useSelector((state) => state.xiso.xisooyin);
  // console.log(xi)
  let periods = [
    {
      saturday: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      sunday: ["Math", "Philosphy", "English", "Physics", "Biology", "Somali"],
    },
    {
      monday: ["Math", "Philosphy", "English", "Physics", "Biology", "Somali"],
    },
    {
      tuesday: ["Math", "Philosphy", "English", "Physics", "Biology", "Somali"],
    },
    {
      wednesday: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      thursday: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      friday: ["Math", "Philosphy", "English", "Physics", "Biology", "Somali"],
    },
  ];


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
      {periods[0].saturday.map((period) => (
        <Grid
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
            7:30 - 8:00
          </p>
          <p
            style={{
              margin: "0px",
              fontSize: "18px",
              fontWeight: "600",
              color: "#676767",
            }}
          >
            {" "}
            {period}
          </p>
          <p
            style={{
              margin: "0px",
              fontSize: "12px",
              fontWeight: "400",
              color: "#B9B9B9",
            }}
          >
            {" "}
            Damlad Axmad
          </p>
        </Grid>
      ))}
    </>
  );
};

export default CellsTable;
