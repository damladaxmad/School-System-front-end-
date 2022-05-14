import MaterialTable from "material-table"
import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Typography, Button, MenuItem, Menu, Avatar} from "@mui/material"
import axios from "axios";


const TableTranscript = () => {

    const columns = [
   
        { title: "Subjects", field: "subjects",
        cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },
        // headerStyle: {
        //     marginLeft: "35px"
        // }
        },
        { title: "CW1", field: "cw1", cellStyle: {
            border: "1px #EEEEEE solid",
            
            textAlign: "center"
          },},
        { title: "CW2", field: "cw2", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "Midterm", field: "midterm", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "CW3", field: "cw3", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "CW4", field: "cw4", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "Final", field: "final", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "Total", field: "total", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        { title: "Remarks", field: "remarks", cellStyle: {
            border: "1px #EEEEEE solid",
            textAlign: "center"
          },},
        
      ];

      const data = [
          {subjects: "Xisaab", cw1: 20, cw2: 20, 
          midterm: 20,  cw3: 20, cw4: 20, final: 20, total: 100,
        remarks: "Transfer"},
        {subjects: "Soomaali", cw1: 20, cw2: 20, 
        midterm: 20,  cw3: 20, cw4: 20, final: 20, total: 100,
      remarks: "Transfer"},
      {subjects: "English", cw1: 20, cw2: 20, 
      midterm: 20,  cw3: 20, cw4: 20, final: 20, total: 100,
    remarks: "Transfer"},
    {subjects: "Taariikh", cw1: 20, cw2: 20, 
    midterm: 20,  cw3: 20, cw4: 20, final: 20, total: 100,
  remarks: "Transfer"},
      
      ]
 
    return (
        <div>
            <MaterialTable 
            columns={columns}
            data = {data}
            options = {{
                toolbar: false,
                headerStyle: {fontWeight: "700", border: "1px #EEEEEE solid",
                },
            }}
            
            style = {{margin: "15px 30px", boxShadow: "none"}}
            />

        </div>
    )

}

export default TableTranscript