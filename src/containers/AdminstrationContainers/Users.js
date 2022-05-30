import React, { useState, useEffect, useReducer } from "react"
import { FormControl, Select, MenuItem, Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UsersTable from "./UsersTable";
import axios from "axios";
import { setUsers } from "../../redux/actions/usersActions";

const Users = () => {
  const dispatch = useDispatch();

  const parentDivStyle = { display: "flex", alignItems: "center",
    justifyContent: "space-between",  gap: "0px", padding: "20px",
    background: "white", width: "98%", margin: "auto",
    marginTop: "20px", borderRadius: "8px 8px 0px 0px",
  }

  const searchStyle = { width: "400px", height: "40px",
    padding: "10px", fontSize: "16px", borderRadius: "8px",
    background: "#EFF0F6", border: "none",
  }

  const selectStyle = {  height: "40px", color: "#B9B9B9",
  width: "150px"}

  const statusArr = ["All", "Active", "Inactive"]
    const [status, setStatus] = useState(statusArr[0]);
    const [query, setQuery] = useState("");
    const students = useSelector((state) => state.students.students);
    const users = useSelector((state) => state.users.users);


    const fasalo = useSelector((state) => state.allFasalo.fasalo);

  const [fasal, setFasal] = useState(fasalo[0]._id);
  const fasalHandler = (e) => {
    setFasal(e.target.value);
    // dispatch(setActiveClass(e.target.value));
  }; 

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  
  const fetchUsers = async () => {
    const response = await axios
      .get("/api/v1/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
    dispatch(setUsers(response.data.data.users));
  };

  const handler = (data) => { 
    if (data.length > 0) {
      return data.filter(
        (std) =>
        std.username.toLowerCase().includes(query) ||
        std.name.toString().toLowerCase().includes(query)
      );
    } else {
      return
    }  
  };

  useEffect(()=> {
    fetchUsers()
  }, [])

   
  return (
<>
    <div
    style={parentDivStyle}
  >
    <input
      type="text"
      placeholder="Search"
      style={searchStyle}
      onChange={(e) => setQuery(e.target.value)}
    />
    <div style={{ display: "flex", gap: "20px", }}>
    <FormControl >
      {/* <InputLabel>Gender</InputLabel> */}

      <Select
        style={selectStyle}
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
      <FormControl style={{ padding: "0px", margin: "0px" }}>
      <Select
        style={selectStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        onChange={statusHandler}
      >
        {statusArr.map((status, index) => (
          <MenuItem value={status} key={index}>
            {status}
          </MenuItem>
        ))}
      </Select>
      </FormControl>

    </div>

  </div>
      <UsersTable data = {handler(users)}/>
      </>

  )
        }

  export default Users