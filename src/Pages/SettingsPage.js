import React from 'react'
import { useFormik } from 'formik'
import "./Examination.css"
import { TextField, Button } from "@mui/material";

 const SettingsPage = () => {
   const arr = [
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Password", type: "password", name: "password"},
     {label: "Confirm Password", type: "password", name: "repassword"},
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Password", type: "password", name: "password"},
     {label: "Confirm Password", type: "password", name: "repassword"},
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Password", type: "password", name: "password"},
     {label: "Confirm Password", type: "password", name: "repassword"},
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Password", type: "password", name: "password"},
     {label: "Confirm Password", type: "password", name: "repassword"},
     {label: "Enter Email", type: "gmail", name: "email"},
     {label: "Enter Password", type: "password", name: "password"},
     {label: "Confirm Password", type: "password", name: "repassword"},
   ]
  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (values.email.length < 4) {
      errors.email = 'Must be 5 characters or more'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    } else if (values.password === '12345678') {
      errors.password = 'Must not be 12345678 !!!'
    }

    if (!values.repassword) {
      errors.repassword = 'Required'
    } else if (values.repassword !== values.password) {
      errors.repassword = 'Second password doesn\'t match'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
      repassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }

  })

  return (  <div
    style={{
      height: "100%",
      width: "95%",
      margin: "0px auto",
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
      <>
 <TextField
 label = {a.label}
   id={a.name}
   name={a.name}
   type={a.type}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value={a.name === "email" ? formik.values.email :
  a.name === "password" ? formik.values.password :
  a.name === "repassword" ? formik.values.repassword : null}
   style = {{width: "290px"}}
   key = {index}/>
{/* {formik.touched.repassword && formik.errors.repassword ? <div className='error'>{formik.errors.repassword}</div> : null} */}

   </>

    ))}


     


   
      <Button style={{
        width: "150px", fontSize: "18px"
      }} type="submit" variant='contained'>Register</Button>

    </form>
  </div>)
}

export default SettingsPage