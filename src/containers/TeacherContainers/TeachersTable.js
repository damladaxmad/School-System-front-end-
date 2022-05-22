import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import PopupForm from "./AssignPopUp";
import axios from "axios";
import profile from "../../assets/images/tablePic.png"

const StudentsTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false)
  const [teacher, setTeacher] = useState('')



  const columns = [
   
    { title: "Teacher Full Name", field: "name" , width: "4%",},
    { title: "Sex", field: "sex" },
    { title: "Email Address", field: "contact" },
    { title: "Salary", field: "salary", render: (row)=> <p>
      ${row.salary}
    </p> },
    { title: "Degree", field: "Degree", emptyValue: ()=> "null" },
    { title: "Field", field: "field", emptyValue: ()=> "null" },    
    { title: "Stutus", field: "status", render: (row)=> <div style={{
      backgroundColor: row.status === "Inactive" ? "#FFF7EB" :  "#EEF3FF" ,
      borderRadius: "100px",
    padding: "1px 8px", color: row.status == "Inactive" ? "#FFAC32"  : "#5887FF"}}>
    <Typography style = {{textAlign: "center", fontSize: "12px"}}> {row.status} </Typography>
  </div> },
    
  ];

  const showModal = () =>{
    setShow(true)
    handleClose()
  }

  const hideModal = () =>{
    setShow(false)
    props.change()
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, teacher) => {
    setAnchorEl(event.currentTarget);
    setTeacher(teacher)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTeacher = (id) => {
    axios.delete(`/api/v1/teachers/${teacher._id}`)
    handleClose()
    props.change()
  };

  const updateTeacher = () => {
    props.update(teacher)
  }

  const selectionHandler = (data) => {
    props.selectTeachers(data)
  }

  const showProfile = () => {
    props.showProfile()
  }


  return (
    <div style={{ width: "95%", margin: "auto" }}>
 {show && <PopupForm hideModal = {hideModal} teacher = {teacher}
 />}
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style = {{}}
      >
        <MenuItem onClick={showModal}>Assign to class</MenuItem>
        <MenuItem onClick={deleteTeacher}>Delete Teacher</MenuItem>
        <MenuItem onClick={updateTeacher}>Update Teacher</MenuItem>
        <MenuItem onClick={showProfile}>Teacher Profile</MenuItem>
      </Menu>
      <MaterialTable
        columns={columns}
        data={props.data}
        options={{
          rowStyle: {},
          showTitle: false,
          selection: true,
          exportButton: true,
          sorting: false,
          showTextRowsSelected: false,
          toolbar: false,
          pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
          pageSize: 5,
          draggable: false,
          // rowStyle: {
          //   overflowWrap: 'break-word'
          // },
          actionsColumnIndex: -1,
          headerStyle: { background: "#EFF0F6", fontSize: "13px", },
        }}
        onSelectionChange={(rows) => selectionHandler(rows)}
        actions={[
          {
            icon: () => <BiDotsHorizontalRounded 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
           />,
            tooltip: "Save User",
            onClick: (event, rowData) => {
              handleClick(event, rowData)
            },
            position: "row",
          },
        ]}
        style={{ borderRadius: "10px", boxShadow: "none" }}
      />
    </div>
  );
};

export default StudentsTable;
