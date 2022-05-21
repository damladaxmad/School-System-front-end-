import React, { useState, useEffect, useReducer } from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { FormControl, Select, MenuItem, Menu } from "@mui/material";
import TeachersTable from "../containers/TeacherContainers/TeachersTable";
import { setTeachers } from "../redux/actions/teachersActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import RegisterTeachers from "../containers/TeacherContainers/RegisterTeachers";
import TeacherProfile from "../containers/TeacherContainers/TeacherProfile";
import AssignManyToClass from "../containers/TeacherContainers/AssingManyToClass";

const Teachers = () => {
  const [newTeachers, setNewTeachers] = useState(false)
  const [buttonName, setButtonName] = useState('Add New Teachers')
  const [update, setUpdate] = useState(false)
  const [showCornerIcon, setShowCornerIcon] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [updatedTeacher, setUpdatedTeacher] = useState(null)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [showProfile, setShowProfile] = useState(false)
  const [assignMany, setAssignMany] = useState(false)
  const [teacherIds, setTeachersIds] = useState('')

  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, student) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAssignMany(true)
  };

  const changeHandler = () => {
    forceUpdate()
  }

  const dispatch = useDispatch()
  const teachers = useSelector((state) => state.teachers.teachers);
  const statusArr = ["All", "Active", "Inactive"]
  const [status, setStatus] = useState(statusArr[0]);
  const [query, setQuery] = useState("");
  const fasalo = useSelector((state) => state.allFasalo.fasalo);

  const [fasal, setFasal] = useState(fasalo[0]._id);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
    // dispatch(setActiveClass(e.target.value));
  }; 

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const addStudentHandler = () => {
    setQuery('')
    if (buttonName == "Add New Teachers"){
      setNewTeachers(true)
      setButtonName("Go To Teachers")
      setShowProfile(false)
      return
    } else if (buttonName == "Go To Teachers") {
      setShowProfile(false)
      setNewTeachers(false)
      setButtonName("Add New Teachers") 
      setUpdate(false)
    }
   
    
  }

  const handler = (data) => { 
 
    if (data.length > 0) {
      return data.filter(
        (std) =>
        std.name.toLowerCase().includes(query) ||
        std.contact.toLowerCase().includes(query)
      );
    } else {
      return
    }  
  };

  const fetchTeachers = async (status) => {
    if (status !== "All"){
      const response = await axios
      .get(`/api/v1/teachers?status=${status}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setTeachers(response.data.data.teachers));
    } else {
      const response = await axios
      .get("/api/v1/teachers")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setTeachers(response.data.data.teachers));
    }

  };

  useEffect(() => {
    // if (students.length > 0) return
    fetchTeachers(status);
  }, [ignored, status]);

  let teachersIds = '';
  const selectHandler = (data) => {
    data.map((d)=> {
        teachersIds += d._id
        teachersIds += ','
    })
    const slicedTeachersIds = teachersIds.slice(0, -1)
    setTeachersIds(slicedTeachersIds)

    setShowCornerIcon(true)
    if (data.length < 1) {
      setShowCornerIcon(false)
    }
  }

  const updateHandler = (teacher) => {
    setNewTeachers(true)
    setButtonName("Go To Teachers")
    setUpdate(true)
    setUpdatedTeacher(teacher)
  }

  const resetFomr = () => {
    setUpdate(false)
  }

  const showProfileHandler = () => {
    setShowProfile(true)
    setButtonName("Go To Teachers")
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
        teachersIds = {teacherIds}/>}
        <h2> {newTeachers ? "Create New Teachers" : 
        showProfile ? "Student Profile" : "Teachers"}</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          onClick = {addStudentHandler}
          startIcon={
            newTeachers || showProfile ? <BiArrowBack
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
      {!newTeachers && !showProfile &&
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
      {!newTeachers && !showProfile && <TeachersTable data={handler(teachers)} 
      change = {changeHandler} selectTeachers = {selectHandler}
      update = {updateHandler} showProfile = {showProfileHandler}/>}
      {newTeachers && <RegisterTeachers update = {update}
      teacher = {updatedTeacher} reset = {resetFomr}/>}
      {showProfile && <TeacherProfile/>}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Assign to class</MenuItem>
        <MenuItem >Delete Teachers</MenuItem>
      </Menu>
    </div>
  );
};

export default Teachers;
