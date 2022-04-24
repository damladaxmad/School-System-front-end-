import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CellsTable from "./CellsTable";
import { useSelector } from "react-redux";


const TheTable = (props) => {
  const xisooyin = useSelector((state) => state.xiso.xisooyin);

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
  xisooyin.map((fasalXiso) => {
    if (fasalXiso.name == props.value){
      classPeriods = fasalXiso.periods
    }
  })

  if (classPeriods.length > 0){
    classPeriods.map((c) => {

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
       timeTable.wednesday.splice(c.period, 1, c)
      }
      if (c.day == "thursday") {
        timeTable.thursday.splice(c.period, 1, c)
      }
      if (c.day == "friday") {
        timeTable.friday.splice(c.period, 1, c)
      }
    })
  }
 

  return (
    <div style={{ display: "flex", margin: "0px 30px", 
    gap: "15px", marginBottom: "40px" }}>
      <Box sx={{ width: "97.5%" }} style={{}}>
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
             key = {p._id}/>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TheTable;
