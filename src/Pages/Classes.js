import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ClassContainer from "../containers/ClassContainers/ClassContainer";

import React from "react";
import {useSelector } from "react-redux";

function Classes() {
  
  const fasalo = useSelector((state) => state.allFasalo.fasalo);

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
      {fasalo.map((fasal, index) => (
          <ClassContainer value = {fasal} key = {index}/>
        ))}
      </div>
    </div>
  );
}

export default Classes;
