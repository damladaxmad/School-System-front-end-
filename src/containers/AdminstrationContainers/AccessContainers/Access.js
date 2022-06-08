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

    const users = useSelector(state => state.users.users)

    const tabs = [
      {name: "Dashboard", access: ["Dashboard", "Quick Actions"]},
      {name: "Students", access: ["Students", "Add New Students",
      "Assign To Class", "Delete Student", "Update Student",
      "Student Profile"]},
      {name: "Teachers", access: ["Teachers", "Add New Teachers", 
      "Assign To Class", "Delete Teacher", "Update Teacher",
      "Teacher Profile"]},
      {name: "Classes", access: ["Classes", "Add New Class", "Edit", "Delete"]},
      {name: "Fees", access: ["Fees", "Exam Charger", "Fee Charger",
      "Post Charges", "Payments", "Student Transactions"]},
      {name: "Employees", access: ["Employees", "Add New Employees", 
      "Make User", "Delete Employee", "Update Employee",
      "Employee Profile"]},
      {name: "Examination", access: ["Examination", "Students", "Add Exam"]},
      {name: "Adminstration", access: ["Adminstration", "Users", "Access",
      "Reset User", "Delete User"]},
      {name: "Settings", access: ["Settings"]},
      {name: "Admission", access: ["Admission", "New Student", "New Teacher",
        "New Employee"]},
      {name: "Schedules", access: ["Schedules", "New Schedule", "Edit Schedule"]},
      {name: "Reports", access: ["Reports", "Print", "Export"]},
    ]

    const [currentUserPrivillages, setCurrentUserPrivillages] = useState()
    const [userAccess, setUserAccess] = useState([])

    
    const [user, setUser] = useState(users[0]._id);
    const userHandler = (e) => {
      setUser(e.target.value);
    }; 
    

    useEffect(()=> {
      users.map(u => {
        if (u._id == user) setCurrentUserPrivillages(u.privillages)
    },[])

    }, [user])
    const [tab, setTab] = useState(tabs[0].name);
    const tabHandler = (e) => {
      setTab(e.target.value); 
    }; 

    const [selectAll, setSelectAll] = useState(false)
    const [engaged, setEngaged] = useState(false)
    const selectAllCeckBox = () => {
        let all;
        setSelectAll(state => state ? false : true)
        tabs.map(t => {
          if (t.name == tab){
            all = t.access 
          }
        })
        if (!selectAll) {
          const realAll = [...all, ...currentUserPrivillages]
          const pure = realAll.filter((v, i, a) => a.indexOf(v) === i);
          setCurrentUserPrivillages(pure)
        } 
        if (selectAll) setCurrentUserPrivillages([])
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
    setUserAccess([...userAccess, access])
  }

  const removeUserAccess = (access) => {
    setUserAccess(arr => arr.filter(el => el !== access))
  }
  
  const resetUserAccess = (access) => {
    setUserAccess([])
  }

  console.log(currentUserPrivillages)


  useEffect(()=> {
    resetUserAccess()
    setSelectAll(false)
  }, [user, tab])

  
  const UpdateUserPrivillages = async (data) => {
    console.log(currentUserPrivillages)
    console.log(userAccess)
    const response = await axios.patch(`api/v1/users/${user}`,
    {privillages: [...currentUserPrivillages, ...userAccess]})
    .then(()=> alert("Successfully Given Access"))
  }

  const saveHandler = () => {
    UpdateUserPrivillages("sths")
  }

  const removeCurrentUserPrivillages = (access) => {
    const filteredArr = currentUserPrivillages.filter(el => el !==access)
    setCurrentUserPrivillages(filteredArr)
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
              currentUserPrivillages = {currentUserPrivillages}
              removeCurrentUserPrivillages = {removeCurrentUserPrivillages}/>
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

  const accessCheckHanlder = (data) => {
    if (props.currentUserPrivillages?.includes(props.value)){
      props.removeCurrentUserPrivillages(data)
      setAccessCheck(false)
    }
    if (!props.currentUserPrivillages?.includes(props.value)){
      setAccessCheck(state => state ? false : true)
    }
      if (!accessCheck && !props.currentUserPrivillages?.includes(props.value)) props.addUserAccess(data)
      if (accessCheck) props.removeUserAccess(data)
  }

  useEffect(()=> {

  }, [props.currentUserPrivillages])

  useEffect(()=> {
    setAccessCheck(false)
  }, [props.tab])

 
  return (

      <FormGroup >
        <FormControlLabel  control={
          <Checkbox style={{padding: "10px 25px"}}
            value = {props.value}
            color="primary"
            checked = {props.currentUserPrivillages?.includes(props.value) ? true
              : accessCheck}
            onChange = {()=>accessCheckHanlder(props.value)}/>}
            label={props.value} />
      </FormGroup>
  )
}

export default Access