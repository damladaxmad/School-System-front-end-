import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { FormControl, Select, MenuItem } from "@mui/material";
import StudentsTable from "../containers/StudentContainers/StudentsTable";
import { setStudents } from "../redux/actions/studentsActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Students = () => {
  const dispatch = useDispatch()
  const students = useSelector((state) => state.students.students);

  const [value, setValue] = useState("ji");
  const [query, setQuery] = useState("");

  const handler = (data) => {
    
    if (data.length > 0) {
      return data.filter(
        (std) =>
        std.first_name.toLowerCase().includes(query) ||
        std.city.toLowerCase().includes(query)
      );
    } else {
      return
    }
    
  };

  const fetchStudents = async () => {
    const response = await axios
      .get("/api/v1/students")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setStudents(response.data.data.students));
  };

  useEffect(() => {
    if (students.length > 0) return
    fetchStudents();
  }, []);

  console.log(students)

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EFF0F6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          margin: "auto",
        }}
      >
        <h2> Students</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <MdAdd
              style={{
                color: "white",
              }}
            />
          }
        >
          Add New Student
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          background: "white",
          width: "95.3%",
          margin: "auto",
          marginTop: "20px",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            width: "400px",
            height: "40px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            background: "#EFF0F6",
            border: "none",
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <FormControl style={{ padding: "0px", margin: "0px" }}>
            <Select
              style={{
                margin: "0px",
                height: "40px",
                width: "150px",
                color: "black",
                backgroundColor: "white",
              }}
              value={value}
              // onChange={maadoHandler}
            >
              <MenuItem value={value}> All Class</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ padding: "0px", margin: "0px" }}>
            <Select
              style={{
                margin: "0px",
                height: "40px",
                width: "150px",
                color: "black",
                backgroundColor: "white",
              }}
              value={value}
              // onChange={maadoHandler}
            >
              <MenuItem value={value}> Status</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {<StudentsTable data={handler(students)} />}
    </div>
  );
};

export default Students;
