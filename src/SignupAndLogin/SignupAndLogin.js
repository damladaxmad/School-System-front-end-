import React, { useEffect, useState } from "react";
import { TextField, Button, } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import Login from "./Login";

const SignupAndLogin = (props) => {

    const handler = () => {
        props.showHandler()
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
        marginTop: "140px",
        display: "flex",
        gap: "20px",
        background: "white",
        flexDirection: "column",
        boxShadow: "2px black",
        // justifyContent: "end",
        // alignItems: "center",
        borderRadius: "10px",
        padding: "25px 44px",
        overflowX: "hidden"
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
        fontSize:"28px", fontWeight: "700",
        alignItems: "center",}}>

        <p style={{margin: "0px", cursor: "pointer",
        color: "#2F49D1",}}
        >Login</p>
       
      </div>


     
      <Login showHandler = {showHandler}/>
    </div>
  );
};

export default SignupAndLogin;
