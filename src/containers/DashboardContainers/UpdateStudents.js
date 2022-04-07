import { Typography, Divider } from "@material-ui/core";
import React from "react";

const UpdateStudents = () => {
  return (
    <div style = {{ padding: "15px",
    borderRadius: "10px", display: "flex", gap: "58px",
    backgroundImage: "linear-gradient(180deg,#0061F7,  #F2994A)"}}
    class = "updateStudents">
        <div style={{}}>
          <p
            style={{
              margin: "0px",
              fontSize: "16px",
              color: "white",
              fontWeight: "600",
            }}
          >
            New Students
          </p>
          <Typography
            style={{
              color: "white",
              opacity: 0.5,
              margin: "0px",
              fontSize: "14px",

            }}
          >
            last 6 month
          </Typography>
        </div>

        <p
            style={{
              margin: "0px",
              fontSize: "16px",
              color: "white",
              fontWeight: "600",
            }}
          >
            568
        </p>
    </div>
  );

}

export default UpdateStudents;