import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CellsTable from "./CellsTable";
import { useDispatch, useSelector } from "react-redux";

const TheTable = (props) => {
  const xi = useSelector((state) => state.xiso.xisooyin);

  let timeTable = {
    saturday: [
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
  ], 
    
    sunday: [
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
 
  ],
    monday: [{course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
   
  ],
    tuesday: [{course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
  
  ],
    wednesday: [{course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
   
  ], 
  
  thursday: [{course: {name: "Empty"}},
  {course: {name: "Empty"}},
  {course: {name: "Empty"}},
  {course: {name: "Empty"}},
  {course: {name: "Empty"}},
  {course: {name: "Empty"}},

],
    friday: [{course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
    {course: {name: "Empty"}},
 
  ]
  }

  let periods = [
    {
      name: "Saturday",
      xisooyin: timeTable.saturday,
    },
    {
      name: "Sunday",
      xisooyin: timeTable.sunday,
    },
    {
      name: "Monday",
      xisooyin:timeTable.monday,
    },
    {
      name: "Tuesday",
      xisooyin: timeTable.tuesday,
    },
    {
      name: "Wednesday",
      xisooyin:timeTable.wednesday,
    },
    {
      name: "Thursday",
      xisooyin: timeTable.thursday,
    },
    {
      name: "Friday",
      xisooyin: timeTable.friday,
    },
  ];

  let classPeriods = 0
  xi.map((x) => {
    if (x.name == props.value){
      classPeriods = x.periods
    }
  })
   
  let fullXiso = 0
  if (classPeriods.length > 0){
    classPeriods.map((c, index) => {
      
      if (c.day == "saturday") {
        timeTable.saturday.splice(c.period, 1, c)
      }
      if (c.day == "sunday") {
          timeTable.sunday.splice(c.period, 1, c)
      }
      if (c.day == "monday") {
          timeTable.monday.splice(c.period, 1, c)
      }
      if (c.day == "tuesday") {
        timeTable.tuesday.splice(c.period, 1, c)
      }
      if (c.day == "wednesday") {
        timeTable.wednesday.splice(index, 1, c)
      }
      if (c.day == "thursday") {
        timeTable.thursday.splice(index, 1, c)
      }
      if (c.day == "friday") {
        timeTable.splice(index, 1, c)
      }
    })
  }
 

  return (
    <div style={{ display: "flex", margin: "0px 30px", gap: "15px" }}>
      <Box sx={{ width: "95%" }} style={{}}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{
            backgroundColor: "white",
            borderTop: "2px solid #F5EFFF",
            borderLeft: "2px solid #F5EFFF",
            margin: "10px 1px",
          }}
        >
          {periods.map((p) => (
            <CellsTable value={p.name} periods = {p.xisooyin}
            startHour = {p.startHour}/>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TheTable;
