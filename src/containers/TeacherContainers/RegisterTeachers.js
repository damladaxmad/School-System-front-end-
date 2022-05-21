import React, { useEffect } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import SelectBox from "../../ReUsables/CustomSelect";

const RegisterStudents = (props) => {
  const arr = [
    { label: "Enter Name", type: "text", name: "name" },
    { label: "Enter Email", type: "gmail", name: "contact" },
    { label: "Enter Degree", type: "text", name: "Degree" },
    { label: "Enter Field", type: "text", name: "field" },
    { label: "Enter Salary", type: "number", name: "salary" },
    { label: "Enter Sex", type: "text", name: "sex" },
  ];

  const validate = (values) => {
    const errors = {};

    if (!values.contact) {
      errors.contact = "Field is Required";
    } else if (values.contact.length < 4) {
      errors.contact = "Must be 5 characters or more";
    }
    if (!values.name) {
      errors.name = "Field is Required";
    }
    if (!values.Degree) {
      errors.degree = "Field is Required";
    }
    if (!values.field) {
      errors.field = "Field is Required";
    }
    if (!values.salary) {
      errors.salary = "Field is Required";
    }
    if (!values.sex) {
      errors.sex = "Field is Required";
    } else if (
      values.sex.toLowerCase() !== "male" &&
      values.sex.toLowerCase() !== "female"
    ) {
      errors.sex = "No qaniis allowed";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      contact: props.update ? props.teacher.contact : "",
      name: props.update ? props.teacher.name : "",
      sex: props.update ? props.teacher.sex : "",
      Degree: props.update ? props.teacher.Degree : "",
      field: props.update ? props.teacher.field : "",
      salary: props.update ? props.teacher.salary : "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (props.update){
        axios.patch(`/api/v1/teachers/${props.teacher._id}`, values).then((res) => {});
        props.reset()
      } else {
        axios.post(`/api/v1/teachers`, values).then((res) => {});
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
