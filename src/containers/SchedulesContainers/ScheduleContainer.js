import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./TableHeader";
import TheTable from "./TheTabke";
import axios from "axios";
import { setXisooyin } from "../../redux/actions/xisoActions";
import { Button } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";

const ScheduleContainer = () => {
  const dispatch = useDispatch();
    const fasalo = useSelector((state) => state.allFasalo.fasalo);
    
    const [value, setValue] = useState(fasalo[0].name);
    
    const fetchXisooyin = async () => {
      const response = await axios
        .get("/api/v1/periods/classPeriods/6257fac4218826aa86e99335")
        .catch((err) => {
          console.log("Err: ", err);
        });
       
      dispatch(setXisooyin("1aad",response.data.periods));
    };

   
  
    useEffect(() => {
      fetchXisooyin();
    }, []);
 

  const selectHandler = (e) => {
    setValue(e.target.value);
  };


  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <FormControl fullWidth>
        {/* <InputLabel>Gender</InputLabel> */}

        <Select
          style={{ margin: "20px", height: "40px", color: "#B9B9B9",
         }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={selectHandler}
        //   label="Gender"
        >
            
            {fasalo.map((fasal) => (
                <MenuItem value={fasal.name}>{fasal.name}</MenuItem>
            ))}
        
        
        </Select>
      </FormControl>
      <Divider style = {{backgroundColor: "#DADBE4", opacity: 0.4}}/>
      
      <TableHeader value = {value}/>
      <TheTable/>
      <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
            float: "right",
            margin: "20px 53px"
          }}
          startIcon={
            <AiOutlineEdit
              style={{
                color: "white",
              }}
            />
          }
        >
         Edit Schedule
        </Button>
    </div>
  );
};

export default ScheduleContainer;
