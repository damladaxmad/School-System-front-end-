import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";

const AdmissionActions = (props) => {

    const actionHandler = () => {
        props.actionHandler(props.actionName)
    }
  return (
    <div>
      <div
        style={{
          width: "110px",
          height: "100px",
          backgroundColor: "#F2994A",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          cursor: "pointer",
          gap: "5px",
        }}
        onClick = {actionHandler}
      >
        {props.icon}
        <Typography style={{ fontSize: "12px" }}>{props.actionName}</Typography>
      </div>
    </div>
  );
};

export default AdmissionActions;
