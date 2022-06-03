import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import ResetPopUp from "./ResetPopUp";
import axios from "axios";

const UsersTable = (props) => {

  const materialOptions = {
    showTitle: false,
    exportButton: true,
    sorting: false,
    showTextRowsSelected: false,
    toolbar: false,
    pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
    pageSize: 4,
    draggable: false,
    actionsColumnIndex: -1,
    headerStyle: { background: "#EFF0F6", fontSize: "13px", },
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);
  const [show, setShow] = useState(false)
  const [user, setUser] = useState('')

  const columns = [
   
    { title: "Employee Name", field: "name", width: "4%" },
    { title: "Username", field: "username" },
    { title: "User Password", field: "password",
  render:()=> <em> _ _ _ _ _ _ _ _ _ _</em> },
  ];

  const showModal = () =>{
    setShow(true)
    handleClose()
  }

  const hideModal = () =>{
    setShow(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, user) => {
    setAnchorEl(event.currentTarget);
    setUser(user)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const subHandleClose = () => {
    setSubAnchorEl(null);
  };

  const deleteUser = () => {
    axios.delete(`/api/v1/users/${user._id}`).then((res)=>
      alert("Deleted successfully")
    )
    handleClose()
    // props.change()
  };

  const focusHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubAnchorEl(event.currentTarget);
  };

  const subMenuDown = () => {
    setSubAnchorEl(null)
  }



  return (
    <div style={{ width: "98%", margin: "auto" }}>
 {show && <ResetPopUp hideModal = {hideModal} user = {user}
 />}
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
           marginRight: "120px"
          }
         }}
        style = {{}}
      >
        <MenuItem onClick={showModal}>Reset User</MenuItem>
        <MenuItem 
      
        onClick={deleteUser}>Delete User</MenuItem>
        <MenuItem 
          id="sub-button"
          aria-controls={subOpen ? 'sub-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={subOpen ? 'true' : undefined}
        onMouseOver={focusHandler}>
          Give access</MenuItem>

      </Menu>

      <Menu
        id="sub-menu"
        anchorEl={subAnchorEl}
        open={subOpen}
        onClose={subHandleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style = {{}}
      >
        <MenuItem >Submenu item 1</MenuItem>
        <MenuItem >Submenu item 2</MenuItem>
        <MenuItem >Submenu item 3</MenuItem>

      </Menu>
      <MaterialTable
        columns={columns}
        data={props.data}
        options={materialOptions}
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

export default UsersTable;
