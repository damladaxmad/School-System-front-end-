import { Button, Divider, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Modal from "../../Modal/Modal"

const AddClass = (props) => {

    const fontColor = {
        style: { color: 'rgb(50, 50, 50)' }
    }

    const selectStyle = {  height: "50px", color: "#B9B9B9",
    width: "290px", }

    const loginArr = [
        { label: "Class Name", type: "text", name: "name" },
        { label: "Class Shift", type: "tex", name: "shift" },
        { label: "Class Fee", type: "number", name: "fee" },
        { label: "Class Stage", type: "text", name: "stage" },
      ];
  

      const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Field is Required";
        }

        if (!values.fee) {
            errors.fee = "Field is Required";
        }

        if (!values.shift) {
            errors.shift = "Field is Required";
        }
        
        if (!values.stage) {
            errors.stage = "Field is Required";
        }
        if (values.stage !== "primary" && values.stage !== "secondary") {
            errors.stage = "enter either primary or secondary";
        }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          name: props.update ? props.value.name : "",
          shift: props.update ? props.value.shift : "",
          stage: props.update ? props.value.stage : "",
          fee: props.update ? props.value.fee : null
        },
        validate,
        onSubmit: async (values, { resetForm }) =>  {
            if (props.update){
                axios.patch(`/api/v1/classes/${props.value._id}`, values).then((res) => {
                    alert("Successfully Upadated")
                  });
                props.hideModal()
                props.change()
            }
            axios.post(`/api/v1/classes`, values).then((res) => {
                alert("Successfully Created")
              });
            resetForm();
            props.hideModal()
        },
      });

 
  return (
    <Modal onClose = {props.hideModal}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <h2> New Class </h2>
        <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", gap: "16px", flexWrap: "wrap",
    justifyContent: "center" }}
    >
      {loginArr.map((a, index) => (
        <div>
          <TextField
            
            inputProps={fontColor}
            variant="outlined"
            placeholder={a.label}
            label = {a.name}
            id={a.name}
            name={a.name}
            type={a.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[a.name]}
            style={{
              width: "200px",
              height: "50px",
            //   padding: "15px",
              fontSize: "16px",
            //   border: "1px solid grey",
            //   borderRadius: "6px",
            }}
            key={index}
          />
          {formik.touched[a.name] && formik.errors[a.name] ? (
            <div style={{ color: "red", marginTop: "8px" }}>{formik.errors[a.name]}</div>
          ) : null}
        </div>
      ))}

      <button
        style={{
          width: "320px",
          fontSize: "20px",
          backgroundColor: "#2F49D1",
          fontWeight: "600",
          marginTop: "10px",
          color: "white",
          height: "45px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        type="submit"
      >
        {" "}
        {props.update ? "Update Class" : "Add Class" }
      </button>
    </form>
   
      </div>
    </Modal>
  );
};

export default AddClass;
