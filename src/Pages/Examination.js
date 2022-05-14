import React, { useState, useEffect, useReducer } from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FormControl, Select, MenuItem, Menu } from "@mui/material";
import ExamTable from "../containers/ExamContainers/ExamTable";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import RegisterStudents from "../containers/StudentContainers/RegisterStudents";
import StudentProfile from "../containers/StudentContainers/StudentProfile";
import { setExams } from "../redux/actions/examsActions";
import TranscriptPage from "../containers/ExamContainers/TranscriptPage";

const Examination = () => {

  const [update, setUpdate] = useState(false)
 
  const [updatedStudent, setUpdatedStudent] = useState(null)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [showProfile, setShowProfile] = useState(false)
  const [showTranscript, setShowTranscript] = useState(true)


  const [value, setValue] = useState("students");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const changeHandler = () => {
    forceUpdate()
  }

  const dispatch = useDispatch()
  const exams = useSelector((state) => state.exams.exams);
  const statusArr = ["final exam", "mid term"]
  const [term, setTerm] = useState(statusArr[0]);
  const [query, setQuery] = useState("");
  const fasalo = useSelector((state) => state.allFasalo.fasalo);

  const [fasal, setFasal] = useState(fasalo[0]._id);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
    // dispatch(setActiveClass(e.target.value));
  }; 

  const termHandler = (e) => {
    setTerm(e.target.value)
  }



  const handler = (data) => { 
   
    if (data.length > 0) {
      return data.filter(
        (std) =>
        std.studentName.toLowerCase().includes(query) 
      );
    } else {
      return
    }  
  };

  const fetchExams = async (term) => {
  
      const response = await axios
      .get(`/api/v1/marks?term=${term}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setExams(response.data.data.students));

  };

  const showHandler = (value) => {
    setShowTranscript(value)
  }

  useEffect(() => {
    // if (students.length > 0) return
    fetchExams(term);
  }, [term]);



  return (
    <>
 
    {!showTranscript && <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EFF0F6",
      }}
    >
     
     <Box sx={{ width: "80%", marginLeft: "25px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            disableFocusRipple = {true}
            TabIndicatorProps={{   
              style: {
                  display: "none",
              },
            }}
          >
            <Tab
            disableFocusRipple = {true}
            disableRipple = {true}
              value="students"
              label="Students"
              style={{ fontSize: "14px", fontWeight: "600",
            color: value == "students" ? "#2F49D1": "#9A9EA6",
            
          }}
            />
            <Tab 
            disableFocusRipple = {true}
            disableRipple = {true}
            value="new exam" label="Add Exam"
            classes = {{
              labelContainer: {padding: 0}
            }}
            style={{ fontSize: "14px", fontWeight: "600",
            color: value == "new exam" ? "#2F49D1" : "#9A9EA6" }} />
          </Tabs>
        </Box>
      
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
        <FormControl >
          {/* <InputLabel>Gender</InputLabel> */}

          <Select
            style={{  height: "40px", color: "#B9B9B9",
            width: "150px", }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fasal}
            onChange={fasalHandler}
          >
            {fasalo.map((fasal, index) => (
              <MenuItem value={fasal._id} key={index}>
                {fasal.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          <FormControl style={{ padding: "0px", margin: "0px" }}>
          <Select
            style={{  height: "40px", color: "#B9B9B9",
            width: "150px", }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={term}
            onChange={termHandler}
          >
            {statusArr.map((status, index) => (
              <MenuItem value={status} key={index}>
                {status}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
         
        </div>
      </div>
      { <ExamTable data={handler(exams)} 
      lastExam = {term} showTranscript = {showHandler}
      />}

    </div>}
    {showTranscript && <TranscriptPage showTranscript = {showHandler}/>}
    </>
  );
};

export default Examination;
