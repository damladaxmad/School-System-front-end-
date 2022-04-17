import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CellsTable from "./CellsTable";

const TheTable = () => {
  let periods = [
    {
      name: "Saturday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Sunday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Monday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Tuesday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Wednesday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Thursday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
    {
      name: "Friday",
      xisooyin: [
        "Math",
        "Philosphy",
        "English",
        "Physics",
        "Biology",
        "Somali",
      ],
    },
  ];

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
            <CellsTable value={p.name} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TheTable;
