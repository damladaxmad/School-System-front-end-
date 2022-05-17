
import Modal from "../../Modal/Modal";
import { Button, Divider, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SelectBox from "../../ReUsables/CustomSelect";
import CustomSelect from "../../ReUsables/CustomSelect";

const NewExam = (props) => {
  const fasalo = useSelector((state) => state.allFasalo.fasalo);
  const teachers = useSelector((state) => state.macalin.macalimiin);
  const courses = useSelector((state) => state.maado.maadooyin);
  const statusArr = [{name: "Term", _id: "term"}, 
  {name: "Final", _id: "final"}]

  const buttonHandler = () => {
    props.hideModal();
  };

 
  return (
    <Modal onClose = {props.hideModal}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
          width: "500px"
        }}
      >
        <h2>Record New Exam </h2>
        <div style={{display: "flex",
      flexDirection: "row", alignItems: "center",
      flexWrap: "wrap", gap: "15px",
      justifyContent: "center",}}>
    
        <CustomSelect height = "40px" width = "200px" data = {fasalo}
        name = "Class"/>
        <CustomSelect height = "40px" width = "200px" data = {teachers}
        name = "Teacher"/>
        <CustomSelect height = "40px" width = "200px" data = {courses}
        name = "Course"/>
        <CustomSelect height = "40px" width = "200px" data = {statusArr}
        name = "Term"/>
      
        </div>
        <Button
          style={{
            margin: "20px auto",
            width: "140px",
            backgroundColor: "#2F49D1",
          }}
          variant="contained"
          color="primary"
          onClick={buttonHandler}
        >
          Save Exam
        </Button>
      </div>
    </Modal>
  );
};


export default NewExam;
