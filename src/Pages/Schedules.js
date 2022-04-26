import React, {useEffect, useState} from "react";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md"; 
import { BiArrowBack } from "react-icons/bi";
import ScheduleContainer from "../containers/SchedulesContainers/ScheduleContainer";
import axios from "axios";
import { setXisooyin } from "../redux/actions/xisoActions";
import { useDispatch } from "react-redux";
import SettingsFile from "./NewSchedule";

const Schedules = (props) => {
  
  const [newSchedule, setNewSchedule] = useState(false)
  const [value, setValue] = useState()
  const [buttonName, setButtonName] = useState('New Schedule')

  const dispatch = useDispatch();

      const fetchXisooyin = async () => {
        const response = await axios
          .get("/api/v1/periods")
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setXisooyin(response.data.data.classes));
      };
      
      const addScheduleHandler = (value) => {
        if (buttonName == "New Schedule"){
          setNewSchedule(true)
          setButtonName("Go To Schedules")
          setValue(value)
          return
        }

        setNewSchedule(false)
          setButtonName("New Schedule")
       
      }

  useEffect(async() => {
    fetchXisooyin();
  }, [buttonName]);

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
        <h2> {newSchedule ? "Create New Schdule" : "Schedules"}</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            newSchedule ? <BiArrowBack
              style={{
                color: "white",
              }}
            /> : <MdAdd
            style={{
              color: "white",
            }}
          />
            
          }
          onClick = {addScheduleHandler}
        >
        {buttonName}
        </Button>
      </div>

      {!newSchedule && <ScheduleContainer onEdit = {addScheduleHandler} />}
      {newSchedule && <SettingsFile value = {value}/>}
      
    </div>
  );
};

export default Schedules;
