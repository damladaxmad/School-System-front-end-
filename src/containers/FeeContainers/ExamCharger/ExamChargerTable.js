import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ExamChargerTable = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [examCharge, setExamCharge] = useState()
    const columns = [
        {title: "Name", field: "name"},
        {title: "Description", field: "description", width: "4%"},
        {title: "Price", field: "price"}
      ]

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>,
        examCharge) => {
        setAnchorEl(event.currentTarget);
        setExamCharge(examCharge)
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const deleteExamCharge = () => {
        setAnchorEl(null);
        props.deleteExamCharge(examCharge._id)
      }

      const updateExamCharge = () => {
         setAnchorEl(null);
          props.updateExamCharge(examCharge)
      }
      
    return (
        <div>
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
        <MenuItem onClick={deleteExamCharge}>Delete Exam Charge</MenuItem>
        <MenuItem onClick={updateExamCharge}>Update Exam Charge</MenuItem>
      </Menu>
        <MaterialTable
            columns={columns}
            data={props.examCharges}
            options={{
              rowStyle: {},
              showTitle: false,
              exportButton: true,
              sorting: false,
              showTextRowsSelected: false,
              toolbar: false,
              draggable: false,
              paging: false,
              // rowStyle: {
              //   overflowWrap: 'break-word'
              // },
              actionsColumnIndex: -1,
              headerStyle: { background: "#EFF0F6", fontSize: "13px", },
            }}
            // onSelectionChange={(rows) => selectionHandler(rows)}
            actions={[
              {
                icon: () => <BiDotsHorizontalRounded />,
                tooltip: "Save User",
                onClick: (event, rowData) => {
                  handleClick(event, rowData)
                },
                position: "row",
              },
            ]}
            style={{ borderRadius: "10px", boxShadow: "none",
          borderLeft: "1.5px solid #F5EFFF", borderRight: "1.5px solid #F5EFFF"}}
          />
            </div>
    )
}

export default ExamChargerTable