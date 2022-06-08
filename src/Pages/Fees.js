import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import "./Examination.css"
import { TextField, Button } from "@mui/material";
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import ExamCharger from '../containers/FeeContainers/ExamCharger/ExamCharger';
import FeeCharger from '../containers/FeeContainers/FeeCharger/FeeCharger';
import Payments from '../containers/FeeContainers/PaymentContainers/Payment';
import PostCharges from '../containers/FeeContainers/PostCharges/PostCharges';
import { setExamCharges } from '../redux/actions/examsActions';
import { setFeeCharges } from '../redux/actions/feesActions';

 const Fees = () => {
  const activeUser = useSelector(state => state.activeUser.activeUser)
   const dispatch = useDispatch()
   const [state, setState] = useState("Exam Charger")
   const tabs = ["Exam Charger", "Fee Charger", "Post Charges", "Payments"]

   const tabClickHandler = (tabName) => {
     setState(tabName)
   }

   const fetchExamCharges = async () => {
    const response = await axios
      .get("/api/v1/examCharges")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setExamCharges(response.data.data.examCharges));
  }

  const fetchFeeCharges = async () => {
    const response = await axios
      .get("/api/v1/feeCharges")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setFeeCharges(response.data.data.feeCharges));
  }

  useEffect(()=> {
    fetchExamCharges()
    fetchFeeCharges()
  }, [])

   return (
<div
    style={{
      height: "100%",
      width: "95%",
      margin: "0px auto",
      display: "flex",
      gap: "0px",
      flexDirection: "column",
    }}
  >
    <div style={{display: "flex", gap: "10px", marginLeft: "10px"}}>
      {tabs.map((tab)=> {
        if (!activeUser.privillages.includes(tab)) return
      else return <p onClick={()=> tabClickHandler(tab)}
      style={{margin: "0px", padding: "4px 6px",
    background: state == tab ? "#0061F7" : null,
    color: state == tab ? "white" : null,
    cursor: "pointer",
    fontSize: "16px", fontWeight: "600", borderRadius: "8px"}}>
      {tab}</p>
 })}
    
    </div>
    {state !="Payments" && state !="Post Charges" && <div
      style={{
            background: "white",
            padding: "45px",
            borderRadius: "10px",
            margin: "30px 0px",
            boxShadow: "1px 1px 1px #9E9E9E",
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {state == "Exam Charger" && <ExamCharger />}
          {state == "Fee Charger" && <FeeCharger/>}
          

          </div>}
          {state == "Payments" && <Payments/>}
          {state == "Post Charges" && <PostCharges/>}
    </div>
   )
   
}


export default Fees