import React, { useEffect } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import SelectBox from "../../ReUsables/SelectBox";

const RegisterStudents = (props) => {
  const arr = [
    { label: "Enter First Name", type: "text", name: "first_name" },
    { label: "Enter Second Name", type: "text", name: "middle_name" },
    { label: "Enter Last Name", type: "text", name: "last_name" },
    { label: "Enter Email", type: "gmail", name: "email" },
    { label: "Enter Phone", type: "text", name: "phone" },
    { label: "Enter City", type: "text", name: "city" },
    { label: "Enter Parent", type: "text", name: "parent" },
    { label: "Enter Fee", type: "number", name: "monthlyFee" },
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
    if (!values.phone) {
      errors.phone = "Field is Required";
    }
    if (!values.city) {
      errors.city = "Field is Required";
    }
    if (!values.parent) {
      errors.parent = "Field is Required";
    }
    if (!values.sex) {
      errors.sex = "Field is Required";
    } else if (
      values.sex.toLowerCase() !== "male" &&
      values.sex.toLowerCase() !== "female"
    ) {
      errors.sex = "No qaniis allowed";
    }
    if (!values.monthlyFee) {
      errors.monthlyFee = "Field is Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: props.update ? props.student.email : "",
      first_name: props.update ? props.student.first_name : "",
      middle_name: props.update ? props.student.middle_name : "",
      last_name: props.update ? props.student.last_name : "",
      sex: props.update ? props.student.sex : "",
      city: props.update ? props.student.city : "",
      parent: props.update ? props.student.parent : "",
      phone: props.update ? props.student.phone : "",
      monthlyFee: props.update ? props.student.monthlyFee : "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (props.update){
        axios.patch(`/api/v1/students/${props.student._id}`, values).then((res) => {});
        props.reset()
      } else {
        axios.post(`/api/v1/students`, values).then((res) => {});
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
      <h2>Registeration Form </h2>
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

export default RegisterStudents;
