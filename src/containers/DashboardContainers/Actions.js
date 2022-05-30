import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import { MdPersonAddAlt1 } from "react-icons/md";

const Actions = () => {
  const parentDivStyle = { width: "110px", height: "100px",
    backgroundColor: "#F2994A", borderRadius: "10px", display: "flex",
    justifyContent: "center", flexDirection: "column",
    alignItems: "center", color: "white", cursor: "pointer",
    gap: "5px", marginTop: "10px"
  }
  
  return (
    <div>
      <div
        style={parentDivStyle}
      >
        <MdPersonAddAlt1 style={{ fontSize: "45px", fontWeight: "bold" }} />
        <Typography style={{ fontSize: "12px" }}>New Student</Typography>
      </div>
    </div>
  );
};

export default Actions;
