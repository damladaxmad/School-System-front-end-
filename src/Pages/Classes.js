import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ClassContainer from "../containers/ClassContainers/ClassContainer";

function Classes() {
  const classes = ["Form1", "Form2", "Form3", "Form4", "Form5","Form1", "Form", "Form3"]

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
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
        <h2> Classes</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <MdAdd
              style={{
                color: "white",
              }}
            />
          }
        >
          Add New Class
        </Button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {classes.map((c) => (
          <ClassContainer />
        ))}
      </div>
    </div>
  );
}

export default Classes;
