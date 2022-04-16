import React from "react";
import { Typography, Divider, Button, Avatar } from "@material-ui/core";
import { BiCheck } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

function FinanceContainer() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "14px",
        borderRadius: "10px",
        width: "31.9%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar style={{ backgroundColor: "#0061F7" }}> F3</Avatar>
        <div
          style={{
            backgroundColor: "#EEF3FF",
            borderRadius: "100px",
            padding: "2px 12px",
            color: "#5887FF",
          }}
        >
          <Typography> Active </Typography>
        </div>
      </div>
      <Typography
        style={{
          color: "#171717",
          fontWeight: "600",
          fontSize: "18px",
          marginTop: "5px",
        }}
      >
        Form 3 B
      </Typography>
      <p style={{ color: "#767676", margin: "0px" }}>
        Secondary School Class with 60 student, 10 teachers and 10 courses.
      </p>
      <Divider style={{ backgroundColor: "#EEEEEE" }} />

      <div style={{ display: "flex", gap: "58px" }}>

        <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
          <BiCheck style={{ color: "#4BDE97", fontSize: "24px" }} />
          <div>
            <p
              style={{
                margin: "0px",
                fontSize: "14px",
                color: "#171717",
                fontWeight: "600",
              }}
            >
              Paid bills
            </p>
            <Typography
              style={{
                color: "#B9B9B9",
                margin: "0px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              $250
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
          <MdOutlineCancel style={{ color: "#D1373F", fontSize: "24px" }} />
          <div>
            <p
              style={{
                margin: "0px",
                fontSize: "14px",
                color: "#171717",
                fontWeight: "600",
              }}
            >
              Unpaid bills
            </p>
            <Typography
              style={{
                color: "#B9B9B9",
                margin: "0px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              $300
            </Typography>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default FinanceContainer;
