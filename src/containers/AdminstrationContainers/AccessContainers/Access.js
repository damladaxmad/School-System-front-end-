import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FormControl, Select, MenuItem, Menu, Divider } from "@mui/material";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import axios from "axios";


const parentDivStyle = { display: "flex", alignItems: "start",
justifyContent: "space-between",  gap: "0px",
background: "white", width: "98%", margin: "auto",
marginTop: "20px", borderRadius: "8px", flexDirection: 'column'
}

const selectStyle = {  height: "40px", color: "#B9B9B9",
width: "250px"}

const Access = () => {
  const [userAccess, setUserAccess] = useState({})
  const [accesses, setAccesses] = useState([])

    const users = useSelector(state => state.users.users)

    const tabs = [
      {name: "Dashboard", access: ["View", "Quick Actions"]},
      {name: "Students", access: ["View", "Add New Students",
      "Assign To Class", "Delete Student", "Update Student",
      "Student Profile"]},
      {name: "Teachers", access: ["View", "Add New Teachers", 
      "Assign To Class", "Delete Teacher", "Update Teacher",
      "Teacher Profile"]},
      {name: "Classes", access: ["View", "Add New Class", "Edit", "Delete"]},
      {name: "Fees", access: ["View", "Exam Charger", "Fee Charger",
      "Post Charges", "Payments", "Student Transactions"]},
      {name: "Employeess", access: ["View", "Add New Employees", 
      "Make User", "Delete Employee", "Update Employee",
      "Employee Profile"]},
      {name: "Examination", access: ["View", "Students", "Add Exam"]},
      {name: "Adminstration", access: ["View", "Users", "Access",
      "Reset User", "Delete User"]},
      {name: "Settings", access: ["View"]},
      {name: "Admission", access: ["View", "New Student", "New Teacher",
        "New Employee"]},
      {name: "Schedules", access: ["View", "New Schedule", "Edit Schedule"]},
      {name: "Reports", access: ["View", "Print", "Export"]},
    ]
    const [currenUserPriv, setCurrenUserPriv] = useState()
    const [user, setUser] = useState(users[0]._id);

    useEffect(()=> {
      users.map(u=> {
        if (u._id == user)
        setCurrenUserPriv(u.privillages)
      })
    }, [user])

    const userHandler = (e) => {
      setUser(e.target.value);
    }; 
    
    const [tab, setTab] = useState(tabs[0].name);
    const tabHandler = (e) => {
      setTab(e.target.value); 
    }; 

    const [selectAll, setSelectAll] = useState(false)
    const [engaged, setEngaged] = useState(false)
    const selectAllCeckBox = () => {
        setSelectAll(state => state ? false : true)
        setEngaged(true)
    }

    const unEngageAllHandler = () => {
      setEngaged(false)
    }

   
  let currentTab = 0
  tabs.map((tabInstance, index)=> {
    if (tabInstance.name == tab){
      currentTab = index
    }
  })

  const addUserAccess = (access) => {
    setAccesses(prev => [...prev, access])
    setUserAccess({...userAccess, name: tab, access: accesses})
  }

  const removeUserAccess = (access) => {
    let newAccess;
    currenUserPriv.map(el => {
      if (el.access?.includes(access)){
        newAccess = el.access.filter(el => el !== access)
      }
    })
    setCurrenUserPriv()
  }
  console.log(currenUserPriv)
  
  const resetUserAccess = () => {
    setUserAccess({})
    setAccesses([])
  }

  useEffect(()=> {

  }, [currenUserPriv])

  useEffect(()=> {
    resetUserAccess()
  }, [user, tab])

  useEffect(()=> {
    setUserAccess({...userAccess, name: tab, access: accesses})
  }, [accesses])

  const updateUserPrivilledges = async (data) => {
    await axios.patch(`api/v1/users/${user}`, 
    {privillages: data}).then(
      ()=> alert("success")
    )
  }
  const saveHandler = () => {
    setCurrenUserPriv(state => [...state, userAccess])
    const all = [...currenUserPriv, userAccess]
    updateUserPrivilledges(all)
  }


    return (
    <div style={parentDivStyle}>
        <div style={{display: "flex", gap: "20px",
    justifyContent: "space-around", alignItems: "center", width: "100%",
    padding: "20px"}}>
        <FormControl >
      {/* <InputLabel>Gender</InputLabel> */}

      <Select
        style={selectStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={user}
        onChange={userHandler}
      >
        {users.map((user, index) => (
          <MenuItem value={user._id} key={index}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <FormControl >
      {/* <InputLabel>Gender</InputLabel> */}

      <Select
        style={selectStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={tab}
        onChange={tabHandler}
      >
        {tabs.map((tab, index) => (
          <MenuItem value={tab.name} key={index}>
            {tab.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormGroup>
    <FormControlLabel  control={
      <Checkbox 
      color="primary"
      checked = {selectAll}
      onChange = {selectAllCeckBox}/>
      } label="Select All" />
    </FormGroup>
    
    <Button 
      style = {{backgroundColor: "#2F49D1",
            fontSize: "18px", fontWeight: "550",
        color: "white", width: "150px", height: "40px"}}
        onClick = {saveHandler}
            variant='contained'>
              SAVE
            </Button>
        </div>

        <div style = {{backgroundColor: "#DADBE4", opacity: 0.7,
    height: "2px", width: "100%"}}></div>
   
        <div style={{padding: "35px 20px"}}> 
          <h3> User Access:</h3>
            {tabs[currentTab].access.map((access, index) => (
              <RenderCheckBoxes key = {index} value = {access}
              addUserAccess = {addUserAccess}
              removeUserAccess = {removeUserAccess}
              tab = {tab} userAccess = {userAccess} user = {user}
              resetUserAccess = {resetUserAccess}
              currenUserPriv = {currenUserPriv}/>
            ))}
        </div>
       {/* {userAccess.map(access => (
         <p> {access}</p>
       ))} */}


    </div>
    )
}

const RenderCheckBoxes = (props) => {

  const [accessCheck, setAccessCheck] = useState(false)

  let currenAccess;
  props.currenUserPriv?.map(c => {
    if (c.name == props.tab){
      currenAccess = c.access
    }
  })

  const accessCheckHanlder = (data) => {
    if (currenAccess?.includes(data)){
      setAccessCheck(false)
     return props.removeUserAccess(data) 
    }
    if (!accessCheck) {
      setAccessCheck(state => state ? false : true)
      props.addUserAccess(data)
    }
    if (accessCheck){
      setAccessCheck(state => state ? false : true)
    }
  }

  useEffect(()=> {
    
  },[props.currenUserPriv, currenAccess])

  useEffect(()=> {
    setAccessCheck(false)
  }, [props.tab])

 
  return (

      <FormGroup >
        <FormControlLabel  control={
          <Checkbox style={{padding: "10px 25px"}}
            value = {props.value}
            color="primary"
            checked = {currenAccess?.includes(props.value) ? true : accessCheck}
            onChange = {()=>accessCheckHanlder(props.value)}/>}
            label={props.value} />
      </FormGroup>
  )
}

export default Access