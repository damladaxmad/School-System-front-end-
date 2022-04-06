import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import { IoMdStats } from "react-icons/io";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      marginLeft: theme.spacing(2),
      cursor: "pointer",
      backgroundColor: "#F0F2FA",
    },
  };
});

const StatCard = (props) => {
  const classes = useStyles();

  return (
      
    <div
      style={{
        width: "250px",
        height: "95px",
        background: "#FFFFFF",
        borderRadius: "10px",
        padding: "40px 5px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Avatar className={classes.avatar}>
        <IoMdStats style={{ color: "#2F49D1" }} />
      </Avatar>
      <div>
        <p
          style={{
            margin: "0px",
            fontSize: "16px",
            color: "#171717",
            fontWeight: "600",
          }}
        >
          {props.value.value}
        </p>
        <Typography
          style={{
            color: "#B9B9B9",
            margin: "0px",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {props.value.title}
        </Typography>
      </div>
    </div>
  );
};

export default StatCard;
