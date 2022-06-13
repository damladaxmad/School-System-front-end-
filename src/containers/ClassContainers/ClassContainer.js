import React, { useState } from "react";
import { Typography, Divider, Button, Avatar } from "@material-ui/core";
import axios from "axios";
import AddClass from "./AddClass";
const parentDivStyle = {backgroundColor: "#FFFFFF",
padding: "14px", borderRadius: "10px", width: "31.9%", display: "flex",
gap: "10px", flexDirection: "column"}

function ClassContainer(props) {

  const [show, setShow] = useState(false)
  const [update, setUpdate] = useState(true)

  const deleteClass = () => {
    axios.delete(`api/v1/classes/${props.value._id}`).then(()=>
    alert("successfull deleted"))
    props.change()
  }

  const editHandler = () => {
    setShow(true)
    setUpdate(true)
  }

  const hideModal = () => {
    setShow(false)
    setUpdate(false)
  }
  
  return (
    <div style = {parentDivStyle}>

      {show && <AddClass update = {update} value = {props.value}
      hideModal = {hideModal} change = {()=> props.change()}/>}
      
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
    Secondary School Class with {props.value.students.length} students, {props.value.teachers.length} teachers and 10 courses.
      </p>
      <Divider style = {{backgroundColor: "#EEEEEE"}}/>

      <div style = {{display: "flex", gap: "16px",
        justifyContent: "flex-end"}}>
          <Button variant = "outlined" style={{
            backgroundColor: "white", color: "black"
        }}> View</Button>
        <Button variant = "outlined" style={{
            backgroundColor: "white", color: "black"
        }}
        onClick = {editHandler}> Edit</Button>
        <Button variant = "outlined" style={{
            backgroundColor: "white", color: "red"
        }}
        onClick = {deleteClass}> Delete</Button>
      </div>


    </div>

  )
}

export default ClassContainer;