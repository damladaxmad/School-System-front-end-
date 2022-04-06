import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import { MdPersonAddAlt1 } from "react-icons/md";

const Actions = () => {
  return (
    <div>
      <div
        style={{
          width: "110px",
          height: "100px",
          backgroundColor: "#F2994A",
          borderRadius: "10px",
          // padding: "40px 5px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          // gap: "8px",
          color: "white",
          marginTop: "15px",
        }}
      >
        <MdPersonAddAlt1 style={{ fontSize: "45px", fontWeight: "bold" }} />
        <Typography style={{ fontSize: "12px" }}>New Student</Typography>
      </div>
    </div>
  );
};

export default Actions;
