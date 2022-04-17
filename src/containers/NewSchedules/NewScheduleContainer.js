import React, {useState} from "react";
import { useSelector } from "react-redux";
import { FormControl,  Select, MenuItem } from "@mui/material";


const NewScheduleContainer = (props) => {

    const fasalo = useSelector((state) => state.allFasalo.fasalo);
    
    const [value, setValue] = useState(fasalo[0].name);
    const selectHandler = (e) => {
      setValue(e.target.value);
    };

    return     <div style={{backgroundColor: "#F0F2FA", width: "29%",
    borderRadius: "10px", margin: "20px", display: "flex",
    justifyContent: "center", alignItems: "center", flexWrap: "wrap", 
    padding: "14px 14px 0px 14px", gap: "20px", marginBottom: "0px"}}>
      <FormControl >

<Select
  style={{ margin: "0px", height: "40px", width: "119px",color: "#B9B9B9",
  backgroundColor: "white"
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
<FormControl >
{/* <InputLabel>Gender</InputLabel> */}

<Select
  style={{ margin: "0px", height: "40px", width: "119px",color: "#B9B9B9",
  backgroundColor: "white"
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
<FormControl >
{/* <InputLabel>Gender</InputLabel> */}

<Select
  style={{ margin: "0px", height: "40px", width: "260px",color: "#B9B9B9",
  backgroundColor: "white"
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

<FormControl >
{/* <InputLabel>Gender</InputLabel> */}

<Select
  style={{ margin: "0px", height: "40px", width: "260px",color: "#B9B9B9",
  backgroundColor: "white"
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

<p style={{margin: "0px", fontSize: '16px',
    fontWeight: "bold", marginLeft: "245px",
    padding: "5px 15px", backgroundColor: "#2F49D1",
    borderRadius: "5px", color: "white"}}> {props.number}</p>
      </div>
}

export default NewScheduleContainer;