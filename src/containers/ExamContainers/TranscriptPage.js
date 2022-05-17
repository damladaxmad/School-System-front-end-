import React, {useState, useEffect} from "react"
import { FormControl, Select, MenuItem, Menu, Button } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../../ReUsables/CustomSelect";
import { Divider } from "@mui/material";
import TableHeader from "../SchedulesContainers/TableHeader";
import ExamHeader from "./ExamHeader";
import TableTranscript from "./TableTranscript";
import CustomSelect from "../../ReUsables/CustomSelect";
import axios from "axios";

const TranscriptPage = (props) => {

  const statusArr = [{name: "Term", _id: "term"}, 
  {name: "Final", _id: "final"}];

  const backHandler = () => {
      props.showTranscript(false)
    }

    const fetchTranscript = async () => {
  
      const response = await axios
      .get(`/api/v1/marks/${props.id}?term=term`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data.data.subjects)
    // dispatch(setExams(response.data.data.students));

  };

  useEffect(() => {
    fetchTranscript();
  }, []);
    
    return (
        <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
        flexDirection: "column",
      }}
    >

    
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2> Transcript </h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <BiArrowBack
              style={{
                color: "white",
              }}
            />
          }
          onClick = {backHandler}
        >
         Go back
        </Button>
      </div>

   <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0px auto",
        marginTop: "20px",
        display: "flex",
        gap: "14px",
        background: "white",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <div style={{display: "flex", width: "100%",
    justifyContent: "center", gap: "25px", marginTop: "15px",
    alignItems: "center"}}>
      <CustomSelect height = "40px" width = "470px" data = {statusArr}
      name = ""/>
     <CustomSelect height = "40px" width = "470px" data = {statusArr}
      name = ""/>
      </div>
     
       <Divider style = {{backgroundColor: "#DADBE4", opacity: 0.4}}/>
       <ExamHeader/>
       <TableTranscript />
    </div>
    
      </div>
    )
}

export default TranscriptPage