import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import PopupForm from "./AssignPopUp";
import axios from "axios";
import profile from "../../assets/images/tablePic.png"

const EmployeesTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false)
  const [employee, setEmployee] = useState('')

  console.log(props.data)

  const columns = [
    { title: "ID", field: "employeeId",},
    { title: "Full Name", field: "fullName", width: "4%"},
    { title: "Sex", field: "sex" },
    { title: "Email Address", field: "email" },
    { title: "Employee Role", field: "role" },
    { title: "Salary", field: "salary", render: (row)=> <p>
      ${row.salary}
    </p> },   
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, employee) => {
    setAnchorEl(event.currentTarget);
    setEmployee(employee)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteEmployee = () => {
    axios.delete(`/api/v1/employees/${employee._id}`)
    handleClose()
    props.change()
  };

  const updateEmployee = () => {
    props.update(employee)
  }

  const selectionHandler = (data) => {
    props.selectTeachers(data)
  }

  const showProfile = () => {
    props.showProfile()
  }


  return (
    <div style={{ width: "95%", margin: "auto" }}>
 {show && <PopupForm hideModal = {hideModal} employee = {employee}
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
        <MenuItem onClick={showModal}>Make User</MenuItem>
        <MenuItem onClick={deleteEmployee}>Delete Emplooyee</MenuItem>
        <MenuItem onClick={updateEmployee}>Update Emplooyee</MenuItem>
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

export default EmployeesTable;
