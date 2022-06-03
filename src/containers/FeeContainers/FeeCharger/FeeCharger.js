import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { TextField, Button } from "@mui/material";
import MaterialTable from "material-table"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setExamCharges } from '../../../redux/actions/examsActions';
import FeeChargerTable from './FeeChargerTable';
import CreateFee from './CreateFee';
import { setFeeCharges } from '../../../redux/actions/feesActions';

const FeeCharger =  () => {
  const [update, setUpdate] = useState("")
  const dispatch = useDispatch()
  const feeCharges = useSelector((state)=> state.fees.feeCharges)
  const [updatedFeeCharge, setUpdatedFeeCharge] = useState(null)
  const [updateFee, setUpdateFee] = useState(false)

  const fetchFeeCharges = async () => {
    const response = await axios
      .get("/api/v1/feeCharges")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setFeeCharges(response.data.data.feeCharges));
  }
  const deleteFeeCharge = (id) => {
    axios.delete(`/api/v1/feeCharges/${id}`).then(res => {
      alert("Successfully Deleted")
    })
    setUpdate(id)
  }

  const updateFeeChargeHander = (feeCharge) => {
    setUpdatedFeeCharge(feeCharge)
    setUpdateFee(true)
  }

  const updateRefreshHandler = () => {
    setUpdateFee(false)
  }

  const refreshOnCreate = (stuff) => {
    setUpdate(stuff)
  }

  useEffect(()=> {
    fetchFeeCharges()
  }, [update, updateFee, updatedFeeCharge])

   
    return (
    <div style={{
        width: '100%',
        display: "flex",
        gap: "22px",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
        <CreateFee refreshOnCreate = {refreshOnCreate}
        updateFee = {updateFee} updatedFeeCharge = {updatedFeeCharge}
        updateRefresh = {updateRefreshHandler}/>
         <FeeChargerTable feeCharges = {feeCharges}
         deleteFeeCharge = {deleteFeeCharge}
         updateFeeCharge = {updateFeeChargeHander}/>
    </div>
    )
}

export default FeeCharger