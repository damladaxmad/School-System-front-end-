import React from 'react'
import { useFormik } from 'formik'
import { TextField, Button } from "@mui/material";
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import axios from "axios";
import { Feedback } from '@material-ui/icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FeeCharger = () => {

    const columns = [
        {title: "Name", field: "name"},
        {title: "Description", field: "description", width: "4%"},
        {title: "Price", field: "price"}
      ]
    
      const data = [
        {name: "Mid Term", description: "Yearly exams taken", price: "10.0$"},
        {name: "Final Term", description: "Monthly exams taken", price: "10.0$"},
        {name: "Montly Term", description: "Every exams taken", price: "10.0$"},
        {name: "Mid Term", description: "Yearly exams taken", price: "10.0$"},
        {name: "Final Term", description: "Monthly exams taken", price: "10.0$"},
        {name: "Final Term", description: "Monthly exams taken", price: "10.0$"},
      ]
    
    return (
    <div style={{
        width: '100%',
        display: "flex",
        gap: "22px",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
        <div style={{display: "flex", flexDirection: "column",
        gap: "10px"}}>
              <p
            style={{
              margin: "0px",
              fontSize: "22px",
              color: "#171717",
              fontWeight: "700",
              marginBottom: "0px",
            }}
          >
            Create Fee Charge
          </p>
          <FormGroup style={{display: "flex", margin: "0px",
        flexDirection: "row"}}>
      <FormControlLabel control={<Checkbox  />} label="Montly" />
      <FormControlLabel  control={<Checkbox />} label="With Exam" />
    </FormGroup>
            <TextField
              label= "Name"
              id= 'exam1'
              name= "exam"
              type= "text"
              placeholder='Charge Name'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values[a.name]}
              style={{ width: "290px", color: "black" }}
              // key={index}
            />
            <TextField
              label= "Months"
              id= 'exam1'
              name= "exam"
              type= "text"
              placeholder='Exam Fee'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values[a.name]}
              style={{ width: "290px", color: "black" }}
              // key={index}
            />
            <FormGroup style={{display: "flex", margin: "0px",
        flexDirection: "row"}}>
      <FormControlLabel control={<Checkbox  />} label="Jenuary" />
      <FormControlLabel  control={<Checkbox />} label="February" />
    </FormGroup>
            <TextField
              label= "Exam"
              id= 'exam1'
              name= "exam"
              type= "text"
              placeholder='Exam Fee'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values[a.name]}
              style={{ width: "290px", color: "black" }}
              // key={index}
            />
             <TextField
              label= "Description"
              id= 'exam1'
              name= "exam"
              type= "text"
              placeholder='Enter Description'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values[a.name]}
              style={{ width: "290px", color: "black" }}
              // key={index}
            />
            
            <Button style = {{backgroundColor: "#2F49D1",
            fontSize: "18px", fontWeight: "550"}}
            variant='contained'>
              Save
            </Button>
          </div>
          <div>
    <MaterialTable
        columns={columns}
        data={data}
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
            // onClick: (event, rowData) => {
            //   handleClick(event, rowData)
            // },
            position: "row",
          },
        ]}
        style={{ borderRadius: "10px", boxShadow: "none",
      borderLeft: "1.5px solid #F5EFFF", borderRight: "1.5px solid #F5EFFF"}}
      />
        </div>
    </div>
    )
}

export default FeeCharger