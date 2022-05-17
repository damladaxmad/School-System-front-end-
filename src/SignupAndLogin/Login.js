import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

const Login = (props) => {

    const loginArr = [
        { label: "Enter Username", type: "text", name: "userName" },
        { label: "Enter Password", type: "password", name: "password" },
      ]
      const validate = (values) => {
        const errors = {};
      
        if (!values.userName) {
          errors.userName = "Field is Required";
        }
        
        if (!values.password) {
          errors.password = "Field is Required";
        }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          userName: "",
          password: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            props.showHandler()
            resetForm()
        },
      });

    return (<form
    onSubmit={formik.handleSubmit}
    style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
  >
    {loginArr.map((a, index) => (
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
      type="submit" > Login</button>
  
  </form>)
}

export default Login