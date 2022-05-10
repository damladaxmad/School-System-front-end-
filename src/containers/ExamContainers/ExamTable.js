import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import axios from "axios";
import profile from "../../assets/images/tablePic.png"

const ExamTable = (props) => {
 
  const [show, setShow] = useState(false)
  const [student, setStudent] = useState('')



  const columns = [ 
    { title: "Student Full Name", field: "studentName" , width: "4%"},
    { title: "Class", field: "className" },
    { title: "Last Exam", render:()=> <div> Final Exam</div>},
    { title: "Class Position", render:()=> <div> 5 of 25 students</div>},
    { title: "Total Marks", field: "totolMarks" },
    { title: "Percentage", field: "percentage" },

  ];





  return (
    <div style={{ width: "95%", margin: "auto" }}>
 
      
      <MaterialTable
        columns={columns}
        data={props.data}
        options={{
          rowStyle: {},
          showTitle: false,
          selection: false,
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
        
        actions={[
          {
            icon: () => <Button variant = "contained"
            style = {{textTransform: 'none',
            backgroundColor: "#2F49D1"}}>
                Transcript
            </Button>,
            tooltip: "Save User",
            onClick: (event, rowData) => {
              console.log(rowData)
            },
            position: "row",
          },
        ]}
        style={{ borderRadius: "10px", boxShadow: "none" }}
      />
    </div>
  );
};

export default ExamTable;
