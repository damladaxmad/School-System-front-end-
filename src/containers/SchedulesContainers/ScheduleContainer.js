import React, { useState} from "react";
import { FormControl, Select, MenuItem, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./TableHeader";
import TheTable from "./TheTabke";

const ScheduleContainer = (props) => {

  const dispatch = useDispatch(props);
    const fasalo = useSelector((state) => state.allFasalo.fasalo);
    
    const [value, setValue] = useState(fasalo[0]._id);
    const [fasalName, setFasalName] = useState(fasalo[0].name);
    const selectHandler = (e) => {
    setValue(e.target.value);
    
    fasalo.map((fasal)=> {
      if (fasal._id == e){
        setFasalName(fasal.name)
        console.log(fasalName)
      }
    })
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
          
          value={value}
          onChange={selectHandler}
        //   label="Gender"
        >
    
            {fasalo.map((fasal) => (
                <MenuItem value={fasal._id} key = {fasal._id}>{fasal.name}</MenuItem>
            ))}
        
        
        </Select>
      </FormControl>
      <Divider style = {{backgroundColor: "#DADBE4", opacity: 0.4}}/>
      
      <TableHeader value = {value} onEdit = {props.onEdit}/>
      <TheTable value = {value}/>
      
        
    </div>
  );
};



export default ScheduleContainer;
