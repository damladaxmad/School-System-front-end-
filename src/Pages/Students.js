import React, { useState, useEffect, useReducer } from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { FormControl, Select, MenuItem, Menu } from "@mui/material";
import StudentsTable from "../containers/StudentContainers/StudentsTable";
import { setStudents } from "../redux/actions/studentsActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import RegisterStudents from "../containers/StudentContainers/RegisterStudents";
import StudentProfile from "../containers/StudentContainers/StudentProfile";
import AssignManyToClass from "../containers/StudentContainers/AssingManyToClass";

const Students = () => {
  const [newStudents, setNewStudents] = useState(false)
  const [buttonName, setButtonName] = useState('Add New Students')
  const [update, setUpdate] = useState(false)
  const [showCornerIcon, setShowCornerIcon] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [updatedStudent, setUpdatedStudent] = useState(null)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [showProfile, setShowProfile] = useState(false)
  const [assignMany, setAssignMany] = useState(false)
  const [studentIds, setStudentsIds] = useState('')

  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, student) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const assignMannyToClass = () => {
    setAssignMany(true)
    setAnchorEl(null);
  }
  const changeHandler = () => {
    forceUpdate()
  }

  const dispatch = useDispatch()
  const students = useSelector((state) => state.students.students);
  const statusArr = ["All", "Active", "Inactive"]
  const [status, setStatus] = useState(statusArr[0]);
  const [query, setQuery] = useState("");
  const fasalo = useSelector((state) => state.allFasalo.fasalo);
  let myClasses = Array.from(fasalo)

  // Adding an All element to classes
  myClasses.map((c, index) => {
   if(index == 0 && c.name != "All")
   myClasses.unshift({name: "All"})
})  
  

  const [fasal, setFasal] = useState(myClasses[0].name);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
  }; 

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const addStudentHandler = () => {
    setQuery('')
    if (buttonName == "Add New Students"){
      setNewStudents(true)
      setButtonName("Go To Students")
      setShowProfile(false)
      return
    } else if (buttonName == "Go To Students") {
      setShowProfile(false)
      setNewStudents(false)
      setButtonName("Add New Students") 
      setUpdate(false)
    }
   
    
  }

  const handler = (data) => { 
    if (data.length > 0) {
      if (query == ""){
        return data.filter(
          (std) =>
          std.className == fasal || fasal == "All"
        );
      }
      else {
        return data.filter(
          (std) =>
          (std.className == fasal || fasal == "All") && (
        std.first_name.toLowerCase().includes(query) ||
        std.city.toLowerCase().includes(query)))
      }
    } else {
      return
    }  
  };

  const fetchStudents = async (status) => {
    if (status !== "All"){
      const response = await axios
      .get(`/api/v1/students?status=${status}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setStudents(response.data.data.students));
    } else {
      const response = await axios
      .get("/api/v1/students")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setStudents(response.data.data.students));
    }

  };

  useEffect(() => {
    // if (students.length > 0) return
    fetchStudents(status);
  }, [ignored, status]);

  let studentsIds = '';
  const selectHandler = (data) => {
    data.map((d)=> {
      studentsIds += d._id
      studentsIds += ','
    })
    const slicedStudentsIds = studentsIds.slice(0, -1)
    setStudentsIds(slicedStudentsIds)
    // assingManyStudentsToClass(slicedStudentsIds, )

    setShowCornerIcon(true)
    if (data.length < 1) {
      setShowCornerIcon(false)
    }
  }

  const updateHandler = (student) => {
    setNewStudents(true)
    setButtonName("Go To Students")
    setUpdate(true)
    setUpdatedStudent(student)
  }

  const resetFomr = () => {
    setUpdate(false)
  }

  const showProfileHandler = () => {
    setShowProfile(true)
    setButtonName("Go To Students")
  }

  const hideModal = () =>{
    setAssignMany(false)
  }

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
        {assignMany && <AssignManyToClass hideModal = {hideModal}
        studentsIds = {studentIds}/>}
        <h2> {newStudents ? "Create New Students" : 
        showProfile ? "Student Profile" : "Students"}</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          onClick = {addStudentHandler}
          startIcon={
            newStudents || showProfile ? <BiArrowBack
              style={{
                color: "white",
              }}
            /> : <MdAdd
            style={{
              color: "white",
            }}
          />
          }
        >
          {buttonName}
        </Button>
      </div>
      {!newStudents && !showProfile &&
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
            {myClasses.map((fasal, index) => (
              <MenuItem value={fasal.name} key={index}>
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
            value={status}
            onChange={statusHandler}
          >
            {statusArr.map((status, index) => (
              <MenuItem value={status} key={index}>
                {status}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
          {showCornerIcon && <BiDotsVerticalRounded style = {{
            fontSize: "24px", margin: "auto 0px",
            cursor: "pointer"
          }} onClick = {handleClick} />}
        </div>
      </div>}
      {!newStudents && !showProfile && <StudentsTable data={handler(students)} 
      change = {changeHandler} selectStudents = {selectHandler}
      update = {updateHandler} showProfile = {showProfileHandler}/>}
      {newStudents && <RegisterStudents update = {update}
      student = {updatedStudent} reset = {resetFomr}/>}
      {showProfile && <StudentProfile/>}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={assignMannyToClass}>Assign to class</MenuItem>
        <MenuItem >Delete Student</MenuItem>
      </Menu>
    </div>
  );
};

export default Students;
