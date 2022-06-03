import { Button, Divider, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Modal from "../../../Modal/Modal"

const PayPopUp = (props) => {
    const fontColor = {
        style: { color: 'rgb(50, 50, 50)' }
    }

    const loginArr = [
        { label: "Enter Type", type: "text", name: "type" },
        { label: "Enter Amount", type: "number", name: "credit" },
        { label: "Enter Description", type: "tex", name: "description" },
        { label: "Student Name", type: "tex", name: "student" },
      ];

      const validate = (values) => {
        const errors = {};
    
        if (!values.type) {
          errors.type = "Field is Required";
        }
    
        if (!values.credit) {
          errors.credit = "Field is Required";
        }

        if (!values.description) {
            errors.description = "Field is Required";
          }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          type: "",
          credit: "",
          description: "",
          student: props.student.fullName
        },
        validate,
        onSubmit: async (values, { resetForm }) =>  {
            values.student = props.student._id
            axios.post(`/api/v1/transactions`, values).then((res) => {
                alert("Successfully Payed")
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
        <h2>Charge Payment </h2>
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
            disabled = {a.name == "student" ? true : false}
            placeholder={a.label}
            id={a.name}
            name={a.name}
            type={a.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[a.name]}
            style={{
              width: "320px",
              height: "50px",
            //   padding: "15px",
              fontSize: "16px",
            //   border: "1px solid grey",
            //   borderRadius: "6px",
            }}
            key={index}
          />
          {formik.touched[a.name] && formik.errors[a.name] ? (
            <div style={{ color: "red" }}>{formik.errors[a.name]}</div>
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
        Pay Charge
      </button>
    </form>
   
      </div>
    </Modal>
  );
};

export default PayPopUp;
