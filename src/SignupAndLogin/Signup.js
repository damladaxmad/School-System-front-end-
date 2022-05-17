import React, { useEffect, useState } from "react";

import { useFormik } from "formik";

const Signup = (props) => {


  const signupArr = [

    { label: "Enter First Name", type: "text", name: "first_name" },
    { label: "Enter Last Name", type: "text", name: "middle_name" },
    { label: "Enter Username", type: "text", name: "userName" },
    { label: "Enter Password", type: "password", name: "password" },
    { label: "Confirm Password", type: "password", name: "confirmPassword" },
  
  ];

  

 
  const validate = (values) => {
    const errors = {};
  
    if (!values.first_name) {
      errors.first_name = "Field is Required";
    }
    if (!values.middle_name) {
      errors.middle_name = "Field is Required";
    }
    if (!values.userName) {
      errors.userName = "Field is Required";
    }
    
    if (!values.password) {
      errors.password = "Field is Required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Field is Required";
    } else if(values.confirmPassword !==values.password) {
        errors.confirmPassword = "Password is not the same";

    }
    return errors;
  };


  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      first_name: "",
      middle_name: "",
      confirmPassword: ""
    },
    validate,
    onSubmit: (values, { resetForm }) => {
        props.showHandler()
        resetForm()
    },
  });

  

  return (

      
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
      >
        {signupArr.map((a, index) => (
          <div>
            <input
              placeholder= {a.label}
              id={a.name}
              name={a.name}
              type={a.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[a.name]}
              style={{ width: "290px", height:"50px",
            padding: "15px", fontSize: "16px", border: "1px solid grey" }}
              key={index}
            />
            {formik.touched[a.name] && formik.errors[a.name] ? (
              <div style={{ color: "red" }}>{formik.errors[a.name]}</div>
            ) : null}
          </div>
        )) }
  
  <button style={{
             width: "300px",
             fontSize: "20px",
             backgroundColor: "#2F49D1",
             fontWeight: "600",
             color: "white",
             height: '40px',
             border: "none",
             borderRadius: "6px",
             cursor: "pointer"
          }}
          type="submit" > Signup</button>
      
      </form>
  );
};

export default Signup;
