import React from "react";
import { Typography, Divider, Button, Avatar } from "@material-ui/core";

function ClassContainer(props) {

  
  return (
    <div style = {{backgroundColor: "#FFFFFF",
    padding: "14px", borderRadius: "10px", width: "31.9%", display: "flex",
    gap: "10px", flexDirection: "column"}}>


      <div style = {{display: "flex", justifyContent: "space-between",
    alignItems: "center"}}>

        <Avatar style = {{backgroundColor: "#0061F7"}}> F3</Avatar>
        <div style={{ backgroundColor: "#EEF3FF", borderRadius: "100px",
        padding: "2px 12px", color: "#5887FF"}}>
        <Typography> Active </Typography>
      </div>
      </div>
      <Typography style={{color: "#171717", fontWeight: "600",
    fontSize: "18px", marginTop: "5px"}}>
       {props.value.name}
      </Typography>
      <p style = {{color: "#767676", margin: "0px"}}>
    Secondary School Class with 60 student, 10 teachers
    and 10 courses.
      </p>
      <Divider style = {{backgroundColor: "#EEEEEE"}}/>

      <div style = {{display: "flex", gap: "16px",
        justifyContent: "flex-end"}}>
        <Button variant = "outlined" style={{
            backgroundColor: "white", color: "black"
        }}> Edit</Button>
        <Button variant = "outlined" style={{
            backgroundColor: "white", color: "red"
        }}> Delete</Button>
      </div>


    </div>

  )
}

export default ClassContainer;