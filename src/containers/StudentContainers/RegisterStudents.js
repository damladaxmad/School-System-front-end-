import React from 'react'
import { useFormik } from 'formik'
import { TextField, Button } from "@mui/material";
import axios from "axios";

 const RegisterStudents = () => {
   const arr = [
     {label: "Enter First Name", type: "text", name: "first_name"},
     {label: "Enter Second Name", type: "text", name: "middle_name"},
     {label: "Enter Last Name", type: "text", name: "last_name"},
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Phone", type: "text", name: "phone"},
     {label: "Enter City", type: "text", name: "city"},
     {label: "Enter Parent", type: "text", name: "parent"},
     {label: "Enter Fee", type: "number", name: "monthlyFee"},
     {label: "Enter Sex", type: "text", name: "sex"},
   ]

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Field is Required'
    } else if (values.email.length < 4) {
      errors.email = 'Must be 5 characters or more'
    } if (!values.first_name) {
      errors.first_name = 'Field is Required'
    }  if (!values.middle_name) {
      errors.middle_name = 'Field is Required'
    } if (!values.last_name) {
      errors.last_name = 'Field is Required'
    } if (!values.phone) {
      errors.phone = 'Field is Required'
    } if (!values.city) {
      errors.city = 'Field is Required'
    } if (!values.parent) {
      errors.parent = 'Field is Required'
    } if (!values.sex) {
      errors.sex = 'Field is Required'
    } else if (values.sex.toLowerCase() !== "male" && values.sex.toLowerCase() !== "female") {
      errors.sex = 'No qaniis allowed'
    } if (!values.monthlyFee) {
      errors.monthlyFee = 'Field is Required'
    } 

    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      sex: '',
      city: '',
      parent: '',
      phone: '',
      monthlyFee: '',
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      axios.post(`/api/v1/students`, values).then((res) => {
      });
      resetForm()
    }
  })

  return (  <div
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
      padding: "16px"
    }}
  >
    <h2>Registeration Form </h2>
    <form onSubmit={formik.handleSubmit}
    style= {{display: "flex", gap:"16px", flexWrap: "wrap"}}>

    {arr.map((a, index)=>(
      <div>
 <TextField
 label = {a.label}
   id={a.name}
   name={a.name}
   type={a.type}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value={a.name === "sex" ? formik.values.sex :
  a.name === "first_name" ? formik.values.first_name :
  a.name === "middle_name" ? formik.values.middle_name :
  a.name === "last_name" ? formik.values.last_name :
  a.name === "email" ? formik.values.email:
  a.name === "city" ? formik.values.city:
  a.name === "parent" ? formik.values.parent:
  a.name === "phone" ? formik.values.phone:
  a.name === "monthlyFee" ? formik.values.monthlyFee: null}
   style = {{width: "290px"}}
   key = {index}/>
 {formik.touched.first_name && formik.errors.first_name 
 && a.name === "first_name" ?
 <div style={{color: "red"}}>{formik.errors.first_name}</div> : 
 formik.touched.middle_name && formik.errors.middle_name 
 && a.name === "middle_name" ?
 <div style={{color: "red"}}>{formik.errors.middle_name}</div> :
 formik.touched.last_name && formik.errors.last_name 
 && a.name === "last_name" ?
 <div style={{color: "red"}}>{formik.errors.last_name}</div> :
 formik.touched.sex && formik.errors.sex 
 && a.name === "sex" ?
 <div style={{color: "red"}}>{formik.errors.sex}</div> :
 formik.touched.city && formik.errors.city 
 && a.name === "city" ?
 <div style={{color: "red"}}>{formik.errors.city}</div> :
 formik.touched.phone && formik.errors.phone 
 && a.name === "phone" ?
 <div style={{color: "red"}}>{formik.errors.phone}</div> :
 formik.touched.parent && formik.errors.parent 
 && a.name === "parent" ?
 <div style={{color: "red"}}>{formik.errors.parent}</div> :
 formik.touched.monthlyFee && formik.errors.monthlyFee 
 && a.name === "monthlyFee" ?
 <div style={{color: "red"}}>{formik.errors.monthlyFee}</div> : 
 formik.touched.email && formik.errors.email 
 && a.name === "email" ?
 <div style={{color: "red"}}>{formik.errors.email}</div> : null
 }

   </div>

    ))}
   
      <Button style={{
        width: "150px", fontSize: "16px", backgroundColor: "#2F49D1",
      }} type="submit" variant='contained'>Register</Button>

    </form>
  </div>)
}

export default RegisterStudents