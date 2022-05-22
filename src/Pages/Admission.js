import React, { useState } from "react";
import { useFormik } from "formik";
import "./Examination.css";
import { TextField, Button, Typography } from "@mui/material";
import { MdPersonAddAlt1 } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import AdmissionActions from "../containers/AdmissionContainers/AdmissionActions";
import RegisterStudents from "../containers/StudentContainers/RegisterStudents";
import RegisterTeachers from "../containers/TeacherContainers/RegisterTeachers";

const Admission = () => {
  const iconStyle = { fontSize: "40px", fontWeight: "bold" };

  const actions = [
    { name: "New Student", icon: <MdPersonAddAlt1 style={iconStyle} /> },
    { name: "New Teacher", icon: <GiTeacher style={iconStyle} /> },
    { name: "New Employee", icon: <MdPersonAddAlt1 style={iconStyle} /> },
    { name: "New Stuff", icon: <MdPersonAddAlt1 style={iconStyle} /> },
  ];

  const [home, setHome] = useState(true);
  const [states, setStates] = useState({
    teacher: false,
    student: false,
  });

  const backHandler = () => {
    setHome(true);
  };

  const actionHandler = (name) => {
    setHome(false);
    if (name == "New Teacher") {
      setStates({ student: false, teacher: true });
    }
    if (name == "New Student") {
      setStates({ student: true, teacher: false });
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        // gap: "10px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "25px",
        }}
      >
        <h2> Admission</h2>

        {!home && (
          <BiArrowBack
            style={{
              color: "#2F49D1",
              fontSize: "35px",
              marginRight: "25px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onClick={backHandler}
          />
        )}
      </div>
      {home && (
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            margin: "35px 25px",
            boxShadow: "1px 1px 1px #9E9E9E",
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          {actions.map((action) => (
            <AdmissionActions
              actionName={action.name}
              actionHandler={actionHandler}
              icon={action.icon}
            />
          ))}
        </div>
      )}
      {!home && states.student && <RegisterStudents />}
      {!home && states.teacher && <RegisterTeachers />}
    </div>
  );
};

export default Admission;
