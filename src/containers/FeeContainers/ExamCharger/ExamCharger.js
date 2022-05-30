import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { TextField, Button } from "@mui/material";
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setExamCharges } from '../../../redux/actions/examsActions';
import ExamChargerTable from './ExamChargerTable';
import CreateExam from './CreateExam';

const ExamCharger =  () => {
  const [update, setUpdate] = useState("")
  const dispatch = useDispatch()
  const examCharges = useSelector((state)=> state.exams.examCharges)
  const [updatedExamCharge, setUpdatedExamCharge] = useState(null)
  const [updateExam, setUpdateExam] = useState(false)

  const fetchExamCharges = async () => {
    const response = await axios
      .get("/api/v1/examCharges")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setExamCharges(response.data.data.examCharges));
  }

  const deleteExamCharge = (id) => {
    axios.delete(`/api/v1/examCharges/${id}`).then(res => {
      alert("Successfully Deleted")
    })
    setUpdate(id)
  }

  const updateExamChargeHander = (examCharge) => {
    setUpdatedExamCharge(examCharge)
    setUpdateExam(true)
  }

  const updateRefreshHandler = () => {
    setUpdateExam(false)
  }

  const refreshOnCreate = (stuff) => {
    setUpdate(stuff)
  }

  useEffect(()=> {
    fetchExamCharges()
  }, [update, updateExam, updatedExamCharge])

   
    return (
    <div style={{
        width: '100%',
        display: "flex",
        gap: "22px",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
        <CreateExam refreshOnCreate = {refreshOnCreate}
        updateExam = {updateExam} updatedExamCharge = {updatedExamCharge}
        updateRefresh = {updateRefreshHandler}/>
         <ExamChargerTable examCharges = {examCharges}
         deleteExamCharge = {deleteExamCharge}
         updateExamCharge = {updateExamChargeHander}/>
    </div>
    )
}

export default ExamCharger