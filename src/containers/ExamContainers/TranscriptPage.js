import React, {useState} from "react"
import { Button, FormControl, Select, MenuItem } from "@material-ui/core";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../../ReUsables/SelectBox";
import { Divider } from "@mui/material";
import TableHeader from "../SchedulesContainers/TableHeader";
import ExamHeader from "./ExamHeader";
import TableTranscript from "./TableTranscript";

const TranscriptPage = (props) => {

  const fasalo = useSelector((state) => state.allFasalo.fasalo);
  const [fasal, setFasal] = useState(fasalo[0]._id);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
    // dispatch(setActiveClass(e.target.value));
  }; 
    
    const backHandler = () => {
        props.showTranscript(false)
    }
    
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
       <SelectBox height = "40px" width = "98%"/>
       <Divider style = {{backgroundColor: "#DADBE4", opacity: 0.4}}/>
       <ExamHeader/>
       <TableTranscript/>
    </div>
    
      </div>
    )
}

export default TranscriptPage