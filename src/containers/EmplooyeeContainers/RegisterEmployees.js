import React, { useEffect } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import SelectBox from "../../ReUsables/CustomSelect";

const RegisterEmployees = (props) => {
  const arr = [
    { label: "Enter First Name", type: "text", name: "first_name" },
    { label: "Enter Second Name", type: "text", name: "middle_name" },
    { label: "Enter Last Name", type: "text", name: "last_name" },
    { label: "Enter Email", type: "gmail", name: "email" },
    { label: "Enter Salary", type: "text", name: "salary" },
    { label: "Enter Role", type: "text", name: "role" },
    { label: "Enter Sex", type: "text", name: "sex" },
  ];

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Field is Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }
    if (!values.first_name) {
      errors.first_name = "Field is Required";
    }
    if (!values.middle_name) {
      errors.middle_name = "Field is Required";
    }
    if (!values.last_name) {
      errors.last_name = "Field is Required";
    }
   
    if (!values.role) {
      errors.city = "Field is Required";
    }
  
    if (!values.sex) {
      errors.sex = "Field is Required";
    } else if (
      values.sex.toLowerCase() !== "male" &&
      values.sex.toLowerCase() !== "female"
    ) {
      errors.sex = "No qaniis allowed";
    }
    if (!values.salary) {
      errors.monthlyFee = "Field is Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: props.update ? props.employee.email : "",
      first_name: props.update ? props.employee.first_name : "",
      middle_name: props.update ? props.employee.middle_name : "",
      last_name: props.update ? props.employee.last_name : "",
      sex: props.update ? props.employee.sex : "",
      salary: props.update ? props.employee.salary : "",
      role: props.update ? props.employee.role : "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (props.update){
        axios.patch(`/api/v1/employees/${props.employee._id}`, values).then((res) => {});
        props.reset()
      } else {
        axios.post(`/api/v1/employees`, values).then((res) => {});
        resetForm();
      }
     
    
    },
  });

  useEffect(()=>{

  }, [props])

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        marginTop: "20px",
        display: "flex",
        gap: "14px",
        background: "white",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <h2>Register Employee </h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
      >
        {arr.map((a, index) => (
          <div>
            <TextField
              label={a.label}
              id={a.name}
              name={a.name}
              type={a.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[a.name]}
              style={{ width: "290px" }}
              key={index}
            />
            {formik.touched[a.name] && formik.errors[a.name] ? (
              <div style={{ color: "red" }}>{formik.errors[a.name]}</div>
            ) : null}
          </div>
        ))}
  

        <Button
          style={{
            width: "150px",
            fontSize: "16px",
            backgroundColor: "#2F49D1",
          }}
          type="submit"
          variant="contained"
        >
          {props.update ? "Update" : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterEmployees;
