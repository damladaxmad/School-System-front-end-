import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux";

const CustomSelect = (props) => {
  const selectData = props.data;

  const [data, setData] = useState(selectData[0]._id);

  const handler = (e) => {
  setData(e.target.value);
};

  return (
      <FormControl >
      <label style = {{fontWeight: "600", marginBottom: "5px"}}>
        {props.name} </label>

      <Select
        style={{  height: props.height, width: props.width,
          color: "#B9B9B9" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data}
        onChange={handler}
        //   label="Gender"
      >
        {selectData.map((data, index) => (
          <MenuItem value={data._id} key={index}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect