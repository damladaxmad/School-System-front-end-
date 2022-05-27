import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
// import PopupForm from "./AssignPopUp";
// import axios from "axios";
// import profile from "../../assets/images/tablePic.png"

const PaymentStudents = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false)
  const [student, setStudent] = useState('')

  const columns = [
   
    { title: "StudentId", field: "studentId" },
    { title: "Student Full Name", field: "fullName" , width: "2%",},
    { title: "Class", field: "className" },
    { title: "Phone", field: "phone" },
    { title: "Credit", field: "credit" },
    { title: "Debit", field: "debit" },
    { title: "Balance", field: "balance" },
  ];

//   const showModal = () =>{
//     setShow(true)
//     handleClose()
//   }

//   const hideModal = () =>{
//     setShow(false)
//     props.change()
//   }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, student) => {
    setAnchorEl(event.currentTarget);
    setStudent(student)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   const deleteStudent = (id) => {
//     axios.delete(`/api/v1/students/${student._id}`)
//     handleClose()
//     props.change()
//   };

//   const updateStudent = () => {
//     props.update(student)
//   }

//   const selectionHandler = (data) => {
//     props.selectStudents(data)
//   }

//   const showProfile = () => {
//     props.showProfile()
//   }


  return (
    <div style={{ width: "98%", margin: "auto" }}>

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
        <MenuItem >Fee Payment</MenuItem>
        
      </Menu>
      <MaterialTable
        columns={columns}
        data={props.data}
        options={{
          rowStyle: {},
          showTitle: false,
          exportButton: true,
          sorting: false,
          showTextRowsSelected: false,
          toolbar: false,
          pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
          pageSize: 8,
          draggable: false,
          // rowStyle: {
          //   overflowWrap: 'break-word'
          // },
          actionsColumnIndex: -1,
          headerStyle: { background: "#EFF0F6", fontSize: "13px", },
        }}
        // onSelectionChange={(rows) => selectionHandler(rows)}
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

export default PaymentStudents;
