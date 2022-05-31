import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";

const FeeChargerTable = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [feeCharge, setFeeCharge] = useState()
    const columns = [
        {title: "Name", field: "name"},
        {title: "Description", field: "description", width: "4%"},
        {title: "Months", field: "months", render: (rowData)=> 
      <p> {`${rowData.months}`}</p>},
        {title: "Exam", field: "exam"},
      ]

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>,
        feeCharge) => {
        setAnchorEl(event.currentTarget);
        setFeeCharge(feeCharge)
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const deleteFeeCharge = () => {
        setAnchorEl(null);
        props.deleteFeeCharge(feeCharge._id)
      }

      const updateFeeCharge = () => {
         setAnchorEl(null);
          props.updateFeeCharge(feeCharge)
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
        <MenuItem onClick={deleteFeeCharge}>Delete Fee Charge</MenuItem>
        <MenuItem onClick={updateFeeCharge}>Update Fee Charge</MenuItem>
      </Menu>
        <MaterialTable
            columns={columns}
            data={props.feeCharges}
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

export default FeeChargerTable