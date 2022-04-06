import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import { MdPersonAddAlt1 } from "react-icons/md";
import Actions from "./Actions";

const QuickActions = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        height: "200px",
        width: "75%",
        float: "left"
      }}
    >
      <Typography
        style={{ fontWeight: "600", fontSize: "24px", color: "#171717;" }}
      >
        Quick Actions
      </Typography>
      <div style={{display: "flex", gap: "22px"}}>
      <Actions />
      <Actions />
      <Actions />
      <Actions />
      <Actions />
      </div>
      
    </div>
  );
};

export default QuickActions;
