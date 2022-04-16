import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./TableHeader";

const ScheduleContainer = () => {
    const fasalo = useSelector((state) => state.allFasalo.fasalo);
    console.log(fasalo)  
  const [value, setValue] = useState(fasalo[0].name);

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
    </div>
  );
};

export default ScheduleContainer;
