import React, {useState, } from "react"
import { Button, FormControl, Select, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";

const SelectBox = (props) => {
    
    const fasalo = useSelector((state) => state.allFasalo.fasalo);
    const [fasal, setFasal] = useState(fasalo[0]._id);
    const fasalHandler = (e) => {
      setFasal(e.target.value);
      // dispatch(setActiveClass(e.target.value));
    }; 
    return    (
    <FormControl fullWidth>

    <Select
      style={{  height: props.height ?? "100px" , 
      width: props.width ?? "100px", margin: "auto",}}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={fasal}
      onChange={fasalHandler}
    >
      {fasalo.map((fasal, index) => (
        <MenuItem value={fasal._id} key={index}>
          {fasal.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
    )
}

export default SelectBox