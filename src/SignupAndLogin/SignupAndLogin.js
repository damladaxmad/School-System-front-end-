import React, { useEffect, useState } from "react";
import { TextField, Button, } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";

const SignupAndLogin = (props) => {

  const [value, setValue] = useState("Login")
    const handler = () => {
        props.showHandler()
    }
    const pClick = (value) =>{
      setValue(value)
    }

    const showHandler = () => {
      props.showHandler()
    }

    
  return (
    <div
      style={{
        // height: "100%",
        width: "30%",
        margin: "auto",
        marginTop: value == "Login" ? "140px" : "70px",
        display: "flex",
        gap: "20px",
        background: "white",
        flexDirection: "column",
        boxShadow: "2px black",
        // justifyContent: "end",
        // alignItems: "center",
        borderRadius: "10px",
        padding: "25px 44px",
      }}
    >
 
      {/*Headers */}

      <div style={{width: "50%",
        margin: "auto",
        display: "flex",
        gap: "20px",
        background: "white",
        flexDirection: "row",
        justifyContent: "center",
        fontSize:"24px", fontWeight: "700",
        alignItems: "center",}}>

        <p style={{margin: "0px", cursor: "pointer",
        color: value == "Login" ? "#2F49D1": "#9A9EA6",}}
        onClick={() => pClick('Login')}>Login</p>

        <p style={{margin: "0px", cursor: "pointer",
        color: value == "Signup" ? "#2F49D1": "#9A9EA6",}}
        onClick={() => pClick('Signup')}> Signup</p>
       
      </div>


     {value == "Signup" ? <Signup showHandler = {showHandler}/> :
      <Login showHandler = {showHandler}/>}
    </div>
  );
};

export default SignupAndLogin;
