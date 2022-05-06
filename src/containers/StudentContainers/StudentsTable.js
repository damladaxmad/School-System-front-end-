import React, { useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PopupForm from "./AssignPopUp";

const StudentsTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false)
  const [student, setStudent] = useState('')

  const columns = [
   
    { title: "First Name", field: "first_name" },
    { title: "Middle Name", field: "middle_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Sex", field: "sex" },
    { title: "Parent", field: "parent" },
    { title: "City", field: "city" },   
    { title: "Fee", field: "monthlyFee" },
    { title: "Phone", field: "phone" },
    
  ];

  const showModal = () =>{
    setShow(true)
    handleClose()
  }

  const hideModal = () =>{
    setShow(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, student) => {
    setAnchorEl(event.currentTarget);
    setStudent(student)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: "95%", margin: "auto" }}>
 {show && <PopupForm hideModal = {hideModal} student = {student}/>}
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
          pageSize: 8,
          actionsColumnIndex: -1,
          headerStyle: { background: "#EFF0F6", fontSize: "13px" },
        }}
        // onSelectionChange={(rows) => alert('You selected ' + rows + ' rows')}
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
              handleClick(event, rowData._id)
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
