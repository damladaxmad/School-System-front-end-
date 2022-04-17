import React, {useState} from "react";
import { Button } from "@material-ui/core";
import { FaSave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem, Divider } from "@mui/material";
import NewScheduleContainer from "../containers/NewSchedules/NewScheduleContainer";


const SettingsFile = () => {

  let numbers = [1, 2, 3, 4, 5, 6]
  const fasalo = useSelector((state) => state.allFasalo.fasalo);
    
    const [value, setValue] = useState(fasalo[0].name);
    const selectHandler = (e) => {
      setValue(e.target.value);
    };
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
        <h2> Create Schedule</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <FaSave
              style={{
                color: "white",
              }}
            />
          }
        >
          Save Schedule
        </Button>
      </div>

      <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
        paddingBottom: "50px"
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

         <div style={{display: "flex", justifyContent: "flex-start",
        alignItems: "center", margin: "20px", gap: "10px"}}>
         <p style={{margin: "0px", fontSize: '18px',
            fontWeight: "bolder"}}> Select Day:</p>
         <FormControl >
        {/* <InputLabel>Gender</InputLabel> */}

        <Select
          style={{ margin: "20px", height: "40px", width: "300px",color: "#B9B9B9",
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

      <p style={{margin: "0px", fontSize: '18px',
            fontWeight: "bolder"}}> Select Duration:</p>
         <FormControl >
        {/* <InputLabel>Gender</InputLabel> */}

        <Select
          style={{ margin: "20px", height: "40px", width: "300px",color: "#B9B9B9",
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
           </div>  

           <div
      style={{
        display: "flex", 
       flexWrap:  "wrap"
      }}
    >
      {numbers.map((number)=> (
        <NewScheduleContainer number = {number}/>
      ))}
  

  </div>

      </div>
    </div>
  );
};

export default SettingsFile;